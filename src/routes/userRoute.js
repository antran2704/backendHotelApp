const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.get("/all", userController.getAllUser);
router.get("/getUser/:token", userController.getUser);
router.post("/check", userController.checkUser);
router.post("/checkNameUser", userController.checkNameUser);
router.post("/add", userController.addUser);
router.post("/like", userController.likeHotel);
router.post("/unlike", userController.unLikeHotel);
router.patch("/edit/userName/:id", userController.editUserName);
router.patch("/edit/password/:id", userController.editPassword);

module.exports = router;