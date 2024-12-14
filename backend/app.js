const express = require("express");
const mongoose = require("mongoose");
//const User = require("./models/user.model");
const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const bcrypt = require("bcrypt"); 
require("dotenv").config(); // Load environment variables
const cartRoute = require('./routes/cartRoute');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const bookRoute = require('./routes/bookRoute');
const port = 3001;
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
app.use('/api/cart', cartRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/books', bookRoute);


// MongoDB connection and server startup
mongoose
  .connect(
    "mongodb+srv://mezo:CR7@cluster0.af6ud0j.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
