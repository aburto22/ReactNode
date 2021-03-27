const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

require("./models/Product");

const productRoutes = require("./routes/productRoutes");

const app = express();

// Connect to MongoDB Atlas
var deb_dv_url =
  "mongodb+srv://dbUser:mypassword@cluster0.nfrx7.mongodb.net/ReactNodeTest?retryWrites=true&w=majority";
var mongoDB = process.env.MONGODB_URI || deb_dv_url;
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.json());

app.use("/", productRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Get prouction files created by React from client/build folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

// Set up port for server side
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
