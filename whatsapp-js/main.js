console.log('hello');
import qrcode from 'qrcode-terminal';
import pkg from 'whatsapp-web.js';
const { Client , LocalAuth } = pkg;
import { getEvents, getPlayers, joinEvent } from './src/proxy.js';
import { parseContent } from './src/inputParser.js';
import { InputKey, Operation } from './src/constants.js';

console.log(process.platform);
export const isLinux = process.platform != 'win32' || process.platform != 'darwin'

const client = isLinux ? new Client({
	authStrategy: new LocalAuth(),
        puppeteer: {
	  headless: true,
	  args: ['--no-sandbox']
	}
}) : new Client();



client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', async msg => {
    const contact = await msg.getContact();
    const chat = await msg.getChat();
    console.log(contact.number);
    let content = msg.body;
    if(!content || content === ''){
	    return;
    }
    if(chat.name == 'Test group ')
    {
	try {
        	let contentMap = null;
        	try {
            		contentMap = parseContent(content);
        	} catch (error) {
            		console.error('Error while parsing content')
            		console.error(error);
        	}

        	if(contentMap) {
            		if(contentMap.get(InputKey.OPERATION) === Operation.SHOW_GAMES) {
                		Promise.resolve(getEvents()).then(message => {
                    			msg.reply(message);
                		});
            		} else if (contentMap.get(InputKey.OPERATION) === Operation.LIST_PLAYERS){
                		Promise.resolve(getPlayers(contentMap.get(InputKey.EVENT_ID))).then(message => {{
                    			msg.reply(message);
                		}});
            		} else if (contentMap.get(InputKey.OPERATION) === Operation.JOIN_GAME){
                		Promise.resolve(joinEvent(contentMap.get(InputKey.EVENT_ID), contact.number, contentMap.get(InputKey.NAME)))
                		.then(message => {
                    			msg.reply(message);
                		});
            		} else if (contentMap.get(InputKey.OPERATION) === Operation.INVALID) {
                		msg.reply('Invalid event');
            		}
        	}
        
    	} catch (error) {
        	console.error('Error while operation')
        	console.error(error);
    	}
    }
});
