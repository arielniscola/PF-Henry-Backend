const { Router } = require("express");

const { sendNotificationWithMail } = require("../controllers/notification.controller");

const notificationRouter = Router();

notificationRouter.post("/mail", sendNotificationWithMail);


module.exports = notificationRouter;