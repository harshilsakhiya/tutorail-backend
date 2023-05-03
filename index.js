const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const tutorialRoutes = require("./routes/api.js");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", tutorialRoutes);

console.log(process.env.PORT);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
    app.listen(process.env.PORT, () => {
      console.log(`server is run on ${process.env.PORT} port`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
