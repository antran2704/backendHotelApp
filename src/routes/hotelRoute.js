const express = require("express");
const router = express.Router();

const hotelController = require("../controller/hotelCotroller");

router.get("/hotel/all", hotelController.getAllHotel);
router.get("/hotel/search", hotelController.searchHotel);
router.get("/hotel/:slug", hotelController.getAHotel);
router.post("/hotel/add", hotelController.addHotel);

module.exports = router;