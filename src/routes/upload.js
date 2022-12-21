const express = require("express");
const path = require("path");
const router = express.Router();

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

const uploadController = require("../controller/uploadController");

router.post("/image", upload.single("avatar"), uploadController.uploadImage);
router.get("/image", uploadController.getImage);

module.exports = router;
