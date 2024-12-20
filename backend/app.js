const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const bcrypt = require("bcrypt");
require("dotenv").config(); // Load environment variables

// Import Routes
const bookRoute = require('./routes/bookRoute');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const cartRoute = require('./routes/cartRoute');
const reviewRoute = require('./routes/reviewRoute');


const port = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://mezo:CR7@cluster0.af6ud0j.mongodb.net/Madarek?retryWrites=true&w=majority&appName=Cluster0";

// App service
const app = express();

// Auto refresh for development
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

app.use(connectLivereload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// Basic test route
app.get("/", (req, res) => {
  res.send("Hello World, from cs309");
});

//routes
app.use('/api/v1/books', bookRoute);
app.use('/api/v1/users', userRoute); // for only admin
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/cart', cartRoute);
app.use('/api/v1/reviews', reviewRoute);

// MongoDB connection and server startup
mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });