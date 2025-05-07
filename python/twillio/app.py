from flask import Flask, request, jsonify
from message_builder import MessageBuilder
from twillio.twilio_proxy import TwilioProxy
import logging
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

twilio_proxy = TwilioProxy()
message_builder = MessageBuilder(twilio_proxy)


@app.route('/send-message', methods=['POST'])
def send_message():
    """
    API endpoint to send a WhatsApp message using Twilio.

    **Request JSON example:**
    {
        "from": "from_number",
        "to": "to_number",
        "message": "Hello from Flickmatch + Twilio WhatsApp!"
    }

    **Response JSON example (on success):**
    {
        "isSuccessful": true,
        "sid": "SM7ea0ba9508f632ed9774aa689859827c"
    }

    **Response JSON example (on failure):**
    {
        "isSuccessful": false,
        "errorMessage": "Error description"
    }

    **Response Codes:**
    - 200: Message sent successfully.
    - 400: Missing required fields (from, to, or message).
    - 500: Internal error (Twilio or other issues).

    Returns:
        JSON response with message status and SID or error message.
    """
    data = request.get_json()
    from_number = data.get("from")
    to_number = data.get("to")
    message = data.get("message")

    if not all([from_number, to_number, message]):
        return jsonify({"isSuccessful": False, "errorMessage": "Missing required fields: 'from', 'to', and 'message'"}), 400

    try:
        sid = message_builder.send_message(from_number, to_number, message)
        return jsonify({"isSuccessful": True, "sid": sid}), 200
    except Exception as e:
        logger.error(f"Error sending message: {str(e)}")
        return jsonify({"isSuccessful": False, "errorMessage": "An internal error occurred. Please try again later."}), 500


@app.route('/')
def index():
    return "WhatsApp Messaging API is running!"


if __name__ == '__main__':
    debug_mode = os.getenv('FLASK_ENV') == 'development'
    app.run(debug=debug_mode)
