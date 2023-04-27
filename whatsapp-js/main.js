console.log("hello");
import qrcode from "qrcode-terminal";
import pkg from "whatsapp-web.js";
const { Client, LocalAuth } = pkg;
import { processGroup } from "./src/inputParser.js";

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
  console.log(contact.number);
  let content = msg.body;
  if (!content || content === "") {
    return;
  }
  if (chat.name == groupName) {
    processGroup(msg);
  }
});
