const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client({});

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', async msg => {
    const chat = await msg.getChat();
    if(chat.name == 'FlickMatch ⚽ Gurugram South City / Sector-29 🍺 Pickup.')
    {
        console.log('YES');
    }
});