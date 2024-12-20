const express = require("express");
const mongoose = require("mongoose");
<<<<<<< HEAD
=======
//const User = require("./models/user.model");
>>>>>>> b7138d88b9392c9e12a500889fc957fa8555f810
const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const bcrypt = require("bcrypt");
require("dotenv").config(); // Load environment variables
<<<<<<< HEAD

// Import Routes
const bookRoute = require('./routes/bookRoute');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const cartRoute = require('./routes/cartRoute');


const port = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://mezo:CR7@cluster0.af6ud0j.mongodb.net/Madarek?retryWrites=true&w=majority&appName=Cluster0";

=======
const cartRoute = require('./routes/cartRoute');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const bookRoute = require('./routes/bookRoute');
const port = 3001;
>>>>>>> b7138d88b9392c9e12a500889fc957fa8555f810
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
<<<<<<< HEAD
app.use('/api/v1/books', bookRoute);
app.use('/api/v1/users', userRoute); // for only admin
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/cart', cartRoute);
=======
app.use('/api/cart', cartRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/books', bookRoute);

>>>>>>> b7138d88b9392c9e12a500889fc957fa8555f810

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
