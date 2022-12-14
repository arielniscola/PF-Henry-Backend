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

const sendMailValidation = async(userName, mail, token) => {
    try {
        const subject = "User account validation"
        const htmlMessage = 
        `<h2>Validate account para usuario ${userName}</h2>
        <p>To validate your user account please enter the following link</p>
        <a href="https://deploy-pf.vercel.app/confirm-account/${token}">Click here</a>        
        `
        const result = await sendNotificationMail(subject, "System Admin" , mail, null, htmlMessage);
        
        return result
    } catch (error) {
        return error
    }
}

const sendMailBannedUser = async (userMail) => {
    try {
        const subject = "Account has been banned"
        const htmlMessage = 
        `<h2>Account has been banned</h2>
        <p>For more information please contact the developers at the following contact form</p>
        <a href="https://deploy-pf.vercel.app/contact-us">Click here</a>        
        `
        const result = await sendNotificationMail(subject, "System Admin" , userMail, null, htmlMessage);
         
        return result
    } catch (error) {
        return error
    }
}

const sendMailBannedComplejo = async(userMail) => {
    try {
        const subject = "Complex banned"
        const htmlMessage = 
        `<h2>Complejo has been banned</h2>
        <p>Your complex has been removed</p>
        <p>For more information please contact the developers at the following contact form</p>
        <a href="https://deploy-pf.vercel.app/contact-us">Click here</a>        
        `
        const result = await sendNotificationMail(subject, "System Admin" , userMail, null, htmlMessage);
         
        return result
    } catch (error) {
        return error
    }
}

const sendMailPasswordRestore = async(userName, mail, token) => {
    try {
        const subject = "User account validation"
        const htmlMessage = 
        `<h2>Restore password ${userName}</h2>
        <p>To reset password please enter the following link</p>
        <a href="https://deploy-pf.vercel.app/forgot-password/${token}">Click here</a>        
        `
        const result = await sendNotificationMail(subject, "System Admin" , mail, null, htmlMessage);
        
        return result
    } catch (error) {
        return error
    }
}

module.exports = {
    sendNotificationWithMail,
    sendMailValidation,
    sendMailBannedUser,
    sendMailBannedComplejo,
    sendMailPasswordRestore
}
