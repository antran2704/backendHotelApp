const { Hotel } = require("../model/index.js");

const hotelController = {
  // get all hotel
  getAllHotel: async (req, res) => {
    try {
      const data = await Hotel.find({});
      res.json(data);
    } catch (error) {
      console.log(error, "get all hotel false");
    }
  },
  // get a hotel
  getAHotel: async (req, res) => {
    try {
      const item = await Hotel.findOne({ slug: req.params.slug });
      res.json(item);
    } catch (error) {
      console.log(error, "add a hotel false");
    }
  },
  // add a hotel
  addHotel: async (req, res) => {
    try {
      const item = await new Hotel(req.body);
      item.save();
      res.json("Add a hotel succesful");
    } catch (error) {
      console.log(error, "add a hotel false");
    }
  },
  searchHotel: async (req, res) => {
    try {
      if (req.query.city) {
        console.log(req.query.city)
        const item = await Hotel.find({
          slug: { $regex: new RegExp(req.query.q) },
          address: { $regex: new RegExp(req.query.city)},
        });
        res.json(item);
      } else {
        const item = await Hotel.find({
          slug: { $regex: new RegExp(req.query.q) },
        });
        res.json(item);
      }
    } catch (error) {
      console.log(error, "search hotel false");
    }
  },
};

module.exports = hotelController;
