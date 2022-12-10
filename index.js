const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./src/db/index.js");
const routes = require("./src/routes/index.js");

const port = 3001;

db.connect();

app.use(cors());

app.use(express.urlencoded());
app.use(express.json());

routes(app);

app.listen(port,() => {
    console.log(`app listen on ${port}`)
},)