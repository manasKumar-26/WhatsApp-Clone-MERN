const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:9VjJVR1IC9nIuan6@cluster0.1eh7v.mongodb.net/WhatsappChats?retryWrites=true&w=majority",
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
const Pusher = require("pusher");
const pusher = new Pusher({
  appId: "1089055",
  key: "83fb2c9e4f17bed11c19",
  secret: "d6a9d865fdd7212e666a",
  cluster: "ap2",
  encrypted: true,
});
db.on("error", (err) => console.errror.bind(console));
db.once("open", () => {
  console.log("Database Connection OK");
  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();
  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.createdAt,
        email: messageDetails.email,
      });
    } else {
      console.log("Error pusher");
    }
  });
});
module.exports = db;
