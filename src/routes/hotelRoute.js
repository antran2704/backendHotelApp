const express = require("express");
const router = express.Router();

const hotelController = require("../controller/hotelController");

router.get("/", hotelController.getAllHotel);
router.get("/hotel/all", hotelController.getAllHotel);
router.get("/hotel/search", hotelController.searchHotel);
router.get("/hotel/popular", hotelController.popularHotel);
router.get("/hotel/recomend", hotelController.recomendHotel);
router.get("/hotel/:slug", hotelController.getAHotel);
router.post("/hotel/add", hotelController.addHotel);

module.exports = router;