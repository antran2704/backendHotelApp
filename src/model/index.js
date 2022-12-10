const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");

// add slug
mongoose.plugin(slug);

const HotelModel = new Schema(
  {
    national: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      slug: "name",
    },
    description: {
      type: String,
    },
    star: {
      type: Number,
    },
    phoneNumber: {
      type: Number,
      maxLength: 12,
    },
    mainImage: {
      type: String,
    },
    services: {
      restaurant: {
        type: Boolean,
        default: false,
      },
      swimmingPool: {
        type: Boolean,
        default: false,
      },
      airCondition: {
        type: Boolean,
        default: false,
      },
      wifi: {
        type: Boolean,
        default: false,
      },
      lift: {
        type: Boolean,
        default: false,
      },
    },
    listImage: [
      {
        type: String,
      },
    ],
    listLikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

const Hotel = mongoose.model("hotel", HotelModel);

module.exports = { Hotel };
