const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
const cors = require("cors");
const db = require("./Config/mongoose");
const messageContent = require("./Models/Messages");
app.use(express.json());
app.use(cors());
app.use("/", require("./Routes"));
app.listen(port, (err) => {
  if (err) {
    console.error.bind("Error", console);
    return;
  }
  console.log("Server up at port ", port);
});
