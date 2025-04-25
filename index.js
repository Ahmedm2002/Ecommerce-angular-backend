const dotenv = require("dotenv")
const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./src/routes/products/productRoutes");
const productRoutes = require("./src/routes/users/userRoutes");
const mongoose = require("mongoose");
const morgan = require('morgan')



dotenv.config()
console.log(process.env.MONGO_URL);

if(process.env.MONGO_URL){
  mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Databse Connected");
  })
  .catch((error) => {
    console.log("Databse connection failed", error);
  });
}else{
  console.log(`Mongo_url not found`)
}

app.use(morgan('tiny'))

app.use("/user", userRoutes);
app.use("/product", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
