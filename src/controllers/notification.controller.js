const sendNotificationMail = require("../libs/nodemailer");

const sendNotificationWithMail = async(req, res) => {
    try {
        const {subject, from, toCount, message, htmlMessage} = req.body;
        const result = await sendNotificationMail(subject, from, toCount, message, htmlMessage);
        
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = {
    sendNotificationWithMail
}

