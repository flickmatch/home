import qrcode from "qrcode-terminal";
import pkg from "whatsapp-web.js";
const { Client, LocalAuth } = pkg;

import express from "express";
const app = express();
app.use(express.json());
const port = 3100;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const contactList = [];
const messageToSend = "Hello! This is a spam message.";

function sleepRandom() {
  // Convert seconds to milliseconds by multiplying by 1000
  const minMilliseconds = 15 * 1000;
  const maxMilliseconds = 60 * 1000;

  // Calculate the random time to sleep
  const sleepTime =
    Math.floor(Math.random() * (maxMilliseconds - minMilliseconds + 1)) +
    minMilliseconds;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, sleepTime);
  });
}

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
      headless: true,
      args: ["--no-sandbox"],
    },
  });


client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
  console.log("QR RECEIVED", qr);
});

client.initialize();

client.on("message", async (msg) => {
  const contact = await msg.getContact();
  const chat = await msg.getChat();
  let content = msg.body;
  if (contact.number == "919818678977" && msg.body == "start spam") {
    for (let i = 0; i < contactList.length; i++) {
      sleepRandom().then(() => {
        const contact = contactList[i] + "@c.us";
        console.log("Spamming", contact);
        client.sendMessage(contact, messageToSend);
      });
    }
  }
});
