const { Hotel } = require("../model/index.js");

const hotelController = {
  // get all hotel
  getAllHotel: async (req, res) => {
    try {
      const data = await Hotel.find({});
      res.json(data);
    } catch (error) {
      res.json("get all hotel false");
    }
  },
  // get a hotel
  getAHotel: async (req, res) => {
    try {
      const item = await Hotel.findOne({ slug: req.params.slug });
      res.json(item);
    } catch (error) {
      res.json("add a hotel false");
    }
  },
  // add a hotel
  addHotel: async (req, res) => {
    try {
      const item = await new Hotel(req.body);
      item.save();
      res.json("Add a hotel succesful");
    } catch (error) {
      res.json("add a hotel false");
    }
  },
  // search hotel
  searchHotel: async (req, res) => {
    try {
      if (req.query.city) {
        const item = await Hotel.find({
          slug: { $regex: new RegExp(req.query.q) },
          address: { $regex: new RegExp(req.query.city) },
        });
        res.json(item);
      } else {
        const item = await Hotel.find({
          slug: { $regex: new RegExp(req.query.q) },
        });
        res.json(item);
      }
    } catch (error) {
      res.json("search hotel false");
    }
  },
  // get hotel popular with star > 4
  popularHotel: async (req, res) => {
    try {
      const items = await Hotel.find({star: {$gt: 4}})
      if(items) {
        res.json(items);
      } else {
        res.json("no hotel finded");
      }
    } catch (error) {
      res.json("false get popular hotel");
    }
  },
  // get hotel recomend with star < 4.2
  recomendHotel: async (req, res) => {
    try {
      const items = await Hotel.find({star: {$lt: 4.2}})
      if(items) {
        res.json(items);
      } else {
        res.json("no hotel finded");
      }
    } catch (error) {
      res.json("false get recomend hotel");
    }
  }
};

module.exports = hotelController;
