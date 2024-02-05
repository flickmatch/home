// run node main.js dev for dev
console.log("hello");
import qrcode from "qrcode-terminal";
import pkg from "whatsapp-web.js";
const { Client, LocalAuth } = pkg;
import { processGroup } from "./src/inputParser.js";
import { createMessage } from "./src/notificationRequestParser.js";

export const isProd =
  process.platform !== "win32" && process.platform !== "darwin";

export const groupName = isProd ? "Online Queue Update" : "Test group ";

import express from "express";
const app = express();
app.use(express.json());
const port = 3000;
const ggnSouthCityChatId = "120363030960923086@g.us";
const hydChatId = "120363104642020865@g.us";

app.post("/notification", (req, res) => {
  const testGroupChatId = "120363088832118953@g.us";
  const jsonData = req.body;
  //console.log('Received JSON data:', JSON.stringify(jsonData));
  client.sendMessage(testGroupChatId, createMessage(jsonData));
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  const testGroupChatId = "120363088832118953@g.us";
  client.sendMessage(testGroupChatId, "Get Endpoint hit");
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

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

client.on("ready", () => {
  console.log("Client is ready!");
  console.log("Is this production Env:" + isProd);
  console.log("Group name is:" + groupName);
});

client.initialize();

client.on("message", async (msg) => {
  const contact = await msg.getContact();
  const chat = await msg.getChat();
  // Way to get the chat id used.
  // console.log(chat.id._serialized);
  // console.log(contact.number);
  let content = msg.body;
  if (!content || content === "") {
    return;
  }
  if (chat.name == groupName) {
    console.log(msg.from);
    processGroup(msg);
  }
});
