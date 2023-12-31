console.log("hello");
import qrcode from "qrcode-terminal";
import pkg from "whatsapp-web.js";
const { Client, LocalAuth } = pkg;
import { processGroup } from "./src/inputParser.js";

import express from 'express';
const app = express();
const port = 3000;
const ggnSouthCityChatId = '120363030960923086@g.us'
const hydChatId = '120363104642020865@g.us'

app.post("/", (req, res) => {
  const testGroupChatId = "120363088832118953@g.us";
  client.sendMessage(testGroupChatId, 'Print List');
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  const testGroupChatId = "120363088832118953@g.us";
  client.sendMessage(testGroupChatId, 'Print List');
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Maybe change this to flag.
export var isProd =
  process.platform != "win32" && process.platform != "darwin";
  var groupName = isProd? "Online Queue Update" : "Test group ";


const client =new Client({
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

client.on("ready", () => {
  console.log("Client is ready!");
});

client.initialize();

client.on("message", async (msg) => {
  const contact = await msg.getContact();
  const chat = await msg.getChat();
  // Way to get the chat id used.
  // console.log(chat.id._serialized);
  console.log(contact.number);
  let content = msg.body;
  if (!content || content === "") {
    return;
  }
  if (chat.name == groupName) {
    // console.log(msg.from);
    processGroup(msg);
  }
});
