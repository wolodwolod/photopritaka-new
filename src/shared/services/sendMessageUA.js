import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// import React from "react";
// import env from "react-dotenv";
// import * as dotenv from 'dotenv';
// dotenv.config();
// require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working

const sendMessage = (payload) => {

  const {email, name, text} = payload;


  // console.log(process.env.NODE_ENV)
  // console.log(email, name, text)
  
  const CREDENTIAL = {
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  };
  //   const REGION = process.env.REGION;
  // const ses = new AWS.SES({ region: REGION, credentials: CREDENTIAL });
  const HTML_CONTENTS =
    '<html>' +
    '<h2>Повідомлення фотографу від користувача сайту PritakaPhoto</h2>' +
    `<table style='border: 1px solid #333'><tbody><tr><td style='border: 1px solid #333; padding: 1px 5px'>Ім'я</td><td style='border: 1px solid #333; padding: 1px 5px'>${name}</td></tr><tr><td style='border: 1px solid #333; padding: 1px 5px'>Електронна адреса</td><td style='border: 1px solid #333; padding: 1px 5px'>${email}</td></tr><tr><td style='border: 1px solid #333; padding: 1px 5px'>Повідомлення</td><td style='border: 1px solid #333; padding: 1px 5px'>${text}</td></tr></tbody></table >` +
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
        Data: 'Від PritakaPhoto',
      },
    },
    Source: process.env.REACT_APP_FROM_MAIL_ADDRESS,
  };

  const sesClient = new SESClient({
    region: process.env.REACT_APP_REGION,
    credentials: CREDENTIAL,
  });

  // ses.sendEmail(params, function (err, data) {
  //   if (err) {
  //     console.log("unable to send email", err);
  //   } else {
  //     console.log("email is send", data);
  //   }
  // });

  const run = async () => {
    try {
      const data = await sesClient.send(new SendEmailCommand(params));
      console.log('Email is sent', data);
    } catch (err) {
      console.log('unable to send email', err);
    }
  };

  run();
};

export default sendMessage;
