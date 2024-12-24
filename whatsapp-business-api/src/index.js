require('dotenv').config();
const request = require('request');
const fs = require('fs');
const csv = require('csv-parser');

const WHATSAPP_API_URL = process.env.WHATSAPP_API_URL;
const AUTH_TOKEN = process.env.AUTH_TOKEN;

const readPhoneNumbersFromCSV = (csvFile) => {
    return new Promise((resolve, reject) => {
        const phoneNumbers = [];
        fs.createReadStream(csvFile)
            .pipe(csv())
            .on('data', (row) => {
                phoneNumbers.push(row.phone_number);
            })
            .on('end', () => {
                resolve(phoneNumbers);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
};

const sendWhatsAppMessage = (phoneNumber, message) => {
    request.post(
        {
            url: WHATSAPP_API_URL,
            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messaging_product: 'whatsapp',
                to: phoneNumber,
                type: 'text',
                text: { body: message },
            }),
        },
        function (err, resp, body) {
            if (err) {
                console.log('Error sending message to', phoneNumber);
            } else {
                console.log('Message sent to', phoneNumber, 'Response:', body);
            }
        }
    );
};

const main = async () => {
    const csvFile = 'src/contacts.csv';
    try {
        const phoneNumbers = await readPhoneNumbersFromCSV(csvFile);

        phoneNumbers.forEach((phoneNumber) => {
            sendWhatsAppMessage(phoneNumber, 'Hello! This is a test message.');
        });
    } catch (error) {
        console.error('Error reading CSV file:', error.message);
    }
};

main();
