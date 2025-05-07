import os
from twilio.rest import Client
from dotenv import load_dotenv

load_dotenv()


class TwilioProxy:
    def __init__(self):
        # Load environment variables
        self.account_sid = os.getenv('TWILIO_ACCOUNT_SID')
        self.auth_token = os.getenv('TWILIO_AUTH_TOKEN')
        self.client = None

    def init_twilio(self):
        # Initialize the Twilio client if it hasn't been initialized yet
        if not self.client:
            if not self.account_sid or not self.auth_token:
                raise ValueError(
                    "Twilio account SID and Auth Token are required but missing.")
            self.client = Client(self.account_sid, self.auth_token)
        return self.client
