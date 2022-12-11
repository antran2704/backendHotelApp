const hotelRoute = require("./hotelRoute");
const userRoute = require("./userRoute");

const routes = (app) => {
  app.use("/", hotelRoute);
  app.use("/user",userRoute);
};

module.exports = routes;
