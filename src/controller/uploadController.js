const { Image } = require("../model/index");

const uploadController = {
  uploadImage: async (req, res) => {
    const image = await new Image({
      ulrImage: req.file.filename
    });
    console.log("save image successfully!!!");
    image.save();
    res.redirect("back");
  },
  getImage: async (req, res) => {
    const images = await Image.find({});
    res.json(images);
  },
};

module.exports = uploadController;
