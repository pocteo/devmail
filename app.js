"use strict";
const nodemailer = require("nodemailer");

async function main(){

  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "localhost",
    port: 1025,
    secure: false,
    ignoreTLS: true
  });

  let info = await transporter.sendMail({
    from: '"Pocteo Factory" <hi@pocteo.io>',
    to: "majdmn6@gmail.com ",
    subject: "Hello ✔",
    text: "Hello Majd?",
    html: "<b>Pocteo Intern</b>"
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);

// Install docker engine
// docker run -p 1080:80 -p 1025:25 djfarrelly/maildev
// node app.js
// Browse http://localhost:1080
