
const { createTransport } = require("nodemailer");
require('dotenv').config();


const sendNotificationMail = async (subject, from, toCount, message="", htmlMessage ="") => {
   
    const transporter = createTransport({
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASS,
      },
    });
    const mailOptions = {
      from: from,
      to: toCount,
      subject: subject,
      text: message,
      html: htmlMessage,
    }; 
    // if (file) {
    //   mailOptions.attachments = [
    //     {
    //       path: new URL(`./${file}`, import.meta.url).pathname,
    //     },
    //   ];
    // }
    
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(info);
      return info
    } catch (err) {
        console.log(err);
      return err
    }

}


module.exports = sendNotificationMail;
