const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");
const orders = require("./routes/orders");
const stripe = require("./routes/stripe");
const productsRoute = require("./routes/products.js");
const users = require("./routes/users")
const result = require("./routes/uploadRouter")

const products = require("./products");

const cloudinary = require("./utils/cloudinary");

const fs = require('fs');
const bodyParser = require('body-parser');
const uploadRouter = require("./routes/uploadRouter");


const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/orders", orders);
app.use("/api/stripe", stripe);
app.use("/api/products", productsRoute);
app.use("/api/users", users);
app.use("/api/upload", uploadRouter);



app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/upload", (req, res) => {
  res.send(upload);
});


const uri = process.env.DB_URI;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("MongoDB connection success..."))
  .catch((error) => console.log("MongoDB connection failed:", error.message));