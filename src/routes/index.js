const hotelRoute = require("./hotelRoute");

const routes = (app) => {
  app.use("/", hotelRoute);
};

module.exports = routes;
