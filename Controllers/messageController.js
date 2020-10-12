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
  messages.find(async (err, data) => {
    if (err) {
      return res.status(500).json({
        err,
      });
    }
    const newData = await data.map((d) => {
      return {
        name: d.name,
        message: d.message,
        timestamp: d.createdAt,
        email: d.email,
      };
    });
    return res.send(newData);
  });
};
