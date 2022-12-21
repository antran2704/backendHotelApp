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
    room: {
      typeRoom: {
        type: String,
        default: ""
      },
      areaRoom: {
        type: Number,
        default: NaN
      },
      numberPeople: {
        type: Number,
        default: NaN
      }
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

const UserModel = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    liked: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hotel",
      },
    ],
  },
  { timestamps: true }
);

const ImagesModel = new Schema(
  {
    ulrImage: {
      type: String
    }
  },
  { timestamps: true }
)

const Hotel = mongoose.model("hotel", HotelModel);
const User = mongoose.model("user", UserModel);
const Image = mongoose.model("image", ImagesModel);

module.exports = { Hotel, User, Image };
