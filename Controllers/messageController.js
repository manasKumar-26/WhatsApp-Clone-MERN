const messages = require("../Models/Messages");
module.exports.createNewMessage = (req, res) => {
  const dbMessage = req.body;
  messages.create(dbMessage, (err, data) => {
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
    return res.status(201).json({
      data: data,
    });
  });
};
module.exports.fetchMessages = (req, res) => {
  messages.find((err, data) => {
    if (err) {
      return res.status(500).json({
        err,
      });
    }
    res.status(200).json({
      messages: data,
    });
  });
};
