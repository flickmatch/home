from twilio.base.exceptions import TwilioRestException
from twilio.rest.api.v2010.account.message import MessageInstance
import logging
import json

logger = logging.getLogger(__name__)


class MessageBuilder:
    def __init__(self, twilio_proxy):
        self.twilio_proxy = twilio_proxy

    def send_message(self, from_number: str, to_number: str, sid: str, first_name: str) -> str:
        sanitized_from_number = from_number.replace('\n', '').replace('\r', '')
        sanitized_to_number = to_number.replace('\n', '').replace('\r', '')
        sanitized_sid = sid.replace('\n', '').replace('\r', '')
        sanitized_first_name = first_name.replace('\n', '').replace('\r', '')
        logger.info(
            f"Sending message from: {sanitized_from_number} to: {sanitized_to_number}")
        try:
            client = self.twilio_proxy.init_twilio()

            message_response: MessageInstance = client.messages.create(
                content_sid=sanitized_sid,
                from_=f"whatsapp:{sanitized_from_number}",
                to=f"whatsapp:{sanitized_to_number}",
                content_variables=json.dumps({"first_name": first_name}),
            )

            logger.info(
                f"WhatsApp message sent successfully, SID: {message_response.sid}")
            return message_response.sid
        except TwilioRestException as e:
            logger.error(f"Failed to send message: {str(e)}")
            raise e
        except Exception as e:
            logger.error(f"Unexpected error: {str(e)}")
            raise e
