const jwt = require("jsonwebtoken");
const { User, Hotel } = require("../model/index");

const userController = {
  // add user
  addUser: async (req, res) => {
    try {
      const user = await new User(req.body);
      await user.save();
      res.json("Add user succesfully");
    } catch (error) {
      res.json("false add user");
    }
  },
  getAllUser: async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      res.json("false get all user");
    }
  },
  checkUser: async (req, res) => {
    try {
      const user = await User.findOne({
        name: req.body.name,
        password: req.body.password,
      }).populate("liked");
      
      if (user) {
        const token = jwt.sign({ id: user._id }, "password");
        res.json(token);
      } else {
        res.json("user not exit");
      }
    } catch (error) {
      res.json("false check user");
    }
  },
  checkNameUser: async (req, res) => {
    try {
      const user = await User.findOne({name: req.body.name})
      if(user) {
        res.json(user);
      } else {
        res.json("not exit")
      }
    } catch (error) {
      res.json("false check name user");
    }
  },
  getUser: async (req, res) => {
    try {
      const token = req.params.token;
      const idUser = jwt.verify(token, "password");
      const user = await User.findOne({ _id: idUser.id }).populate("liked");

      if (user) {
        res.json(user);
      } else {
        res.json("user not exit");
      }
    } catch (error) {
      res.json("false get user");
    }
  },
  editUserName: async (req, res) => {
    try {
      const user = await User.findOne({_id: req.params.id});
      await user.updateOne({name: req.body.name});
      res.json("update user name successfully");
    } catch (error) {
      res.json("update user name false");
    }
  },
  editPassword: async (req, res) => {
    try {
      const user = await User.findOne({_id: req.params.id});
      await user.updateOne({password: req.body.password});
      res.json("update password successfully");
    } catch (error) {
      res.json("update password false");
    }
  },
  likeHotel: async (req, res) => {
    try {
      const userId = req.body.userId;
      const hotelId = req.body.hotelId;
      const user = await User.findOne({ _id: userId });
      const hotel = await Hotel.findOne({ _id: hotelId });
      if(user && hotel) {
        await user.updateOne({ $push: { liked: hotelId } });
        await hotel.updateOne({ $push: { listLikes: userId } });
        res.json("like and save succesfully");
      } else {
        res.json("hotel or user not exit");
      }
    } catch (error) {
      res.json("like and save false");
    }
  },
  unLikeHotel: async (req, res) => {
    try {
      const userId = req.body.userId;
      const hotelId = req.body.hotelId;
      const user = await User.findOne({ _id: userId });
      const hotel = await Hotel.findOne({ _id: hotelId });
      if(user && hotel) {
        await user.updateOne({ $pull: { liked: hotelId } });
        await hotel.updateOne({ $pull: { listLikes: userId } });
        res.json("unlike and save succesfully");
      } else {
        res.json("hotel or user not exit");
      }
      
    } catch (error) {
      res.json("unlike and save false");
    }
  },
};

module.exports = userController;
