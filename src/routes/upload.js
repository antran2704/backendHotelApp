const express = require("express");
const path = require("path");
const router = express.Router();
const uploadController = require("../controller/uploadController");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get("/getImage", uploadController.getImage);
router.post("/image", upload.single("avatar"), uploadController.uploadImage);

module.exports = router;
