const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  return res.status(200).json({
    message: "Yooo Hooo MERN Backend For WhatsApp",
  });
});
router.use("/api", require("./api"));
module.exports = router;
