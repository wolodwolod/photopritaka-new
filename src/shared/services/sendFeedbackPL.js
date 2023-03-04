import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sendFeedbackPL = payload => {
  const { email, name, text } = payload;

  // const example = process.env.REACT_APP_EXAMPLE;
 
  // console.log(process.env.NODE_ENV);
  // console.log(email, name, text);
  // console.log(example);
  
  const REGION = process.env.REACT_APP_REGION;

  const CREDENTIAL = {
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  };
  
  const HTML_CONTENTS =
    '<html>' +
    '<h2>Opinie od użytkownika strony PrytakaPhoto</h2>' +
    `<table style='border: 1px solid #333'><tbody><tr><td style='border: 1px solid #333; padding: 1px 5px'>Imię</td><td style='border: 1px solid #333; padding: 1px 5px'>${name}</td></tr><tr><td style='border: 1px solid #333; padding: 1px 5px'>Adres e-mail</td><td style='border: 1px solid #333; padding: 1px 5px'>${email}</td></tr><tr><td style='border: 1px solid #333; padding: 1px 5px'>Opinie</td><td style='border: 1px solid #333; padding: 1px 5px'>${text}</td></tr></tbody></table >` +
    '</html>';

  const params = {
    Destination: {
      ToAddresses: [process.env.REACT_APP_TO_MAIL_ADDRESS],
      CcAddresses: [process.env.REACT_APP_FROM_MAIL_ADDRESS],
    },

    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: HTML_CONTENTS,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Od PrytakaPhoto',
      },
    },
    Source: process.env.REACT_APP_FROM_MAIL_ADDRESS,
  };

  const sesClient = new SESClient({
    region: REGION,
    credentials: CREDENTIAL,
  });
  
  const run = async () => {
    try {
      const data = await sesClient.send(new SendEmailCommand(params));
      console.log('Email is sent', data);
      sessionStorage.setItem('sent', true);
      
    } catch (err) {
      console.log('unable to send email', err);
      sessionStorage.setItem('err', true);
    }
  };

  run();
};

export default sendFeedbackPL;
