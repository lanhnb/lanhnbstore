const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");
const orders = require("./routes/orders");
const stripe = require("./routes/stripe");
const productsRoute = require("./routes/products.js");
const xkldsRoute = require("./routes/xkld.js")
const users = require("./routes/users")
const result = require("./routes/uploadRouter")
const path = require('path');
const products = require("./products.js");
const xklds = require("./xklds.js");
const cloudinary = require("./utils/cloudinary");

const fs = require('fs');
const bodyParser = require('body-parser');
const uploadRouter = require("./routes/uploadRouter");


const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/api/keys/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
app.get("/api/keys/google", (req, res) => {
  res.send({ key: process.env.GOOGLE_API_KEY || "" });
});

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
app.use("/api/xklds", xkldsRoute);


app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/xklds", (req, res) => {
  res.send(xklds);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/upload", (req, res) => {
  res.send(upload);
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
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
