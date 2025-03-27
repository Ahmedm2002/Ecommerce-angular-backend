require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/products/productRoutes");
const productRoutes = require("./routes/users/userRoutes");
const mongoose = require("mongoose");

console.log(process.env.MONGO_URL);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Databse Connected");
  })
  .catch((error) => {
    console.log("Databse connection failed", error);
  });

const con = mongoose.connection;

app.use("/user", userRoutes);
app.use("/product", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
