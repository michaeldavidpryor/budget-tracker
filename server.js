const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const ParcelBundler = require("parcel-bundler");

const PORT = 1234;

const app = express();

app.use(logger("dev"));

app.use(ParcelBundler);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect;
process.env.MONGODB_URI ||
  ("mongodb: //user:password1@ds351987.mlab.com:51987/heroku_bkbcr1r1",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useMongoClient: true,
  });

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
