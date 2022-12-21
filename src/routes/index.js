const express = require("express");

const hotelRoute = require("./hotelRoute");
const userRoute = require("./userRoute");
const uploadRoute = require("./upload");

const routes = (app) => {
  app.use("/", hotelRoute);
  app.use("/user", userRoute);
  app.use("/upload", uploadRoute);
  app.use("/uploads", express.static("uploads"))
};

module.exports = routes;
