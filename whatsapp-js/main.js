console.log('hello');
import qrcode from 'qrcode-terminal';
import pkg from 'whatsapp-web.js';
const { Client , LocalAuth } = pkg;
import { getEvents } from './proxy.js';


const client = new Client({
	authStrategy: new LocalAuth(),
        puppeteer: {
	  headless: true,
	  args: ['--no-sandbox']
	}
});



client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', async msg => {
    //console.log(await msg.getContact());
    const chat = await msg.getChat();
    //console.log(chat);
    let content = msg.body;
    if(content !== null) {
	    content = content.replaceAll(' ', '');
	    content = content.toLowerCase();
    }
    if(chat.name == 'Test group ' && (content === 'showgames' || content === 'showgame'))
    {
	Promise.resolve(getEvents()).then(message => {
            var out = '';
            message.forEach(mes => {
                out = out.concat(mes, '\n');
            });
            //console.log(out);
	    msg.reply(out);
        });
    }
});
