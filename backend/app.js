const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const bcrypt = require("bcrypt"); 
const bookRoutes = require('./routes/book');  
require("dotenv").config(); // Load environment variables

const port = 3001;
// App service
const app = express();

// Auto refresh for development
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

app.use(connectLivereload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// book routes
app.use('/api/books',bookRoutes);

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
// Basic test route
app.get("/", (req, res) => {
  res.send("Hello World, from cs309");
});

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
