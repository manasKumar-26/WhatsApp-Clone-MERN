const express = require("express");
const router = express.Router();
const messageController = require("../../Controllers/messageController");
router.post("/messages/new", messageController.createNewMessage);
router.get("/messages/sync", messageController.fetchMessages);
module.exports = router;
