const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
<<<<<<< HEAD
const User = require('../models/userModel');

const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });
};

// @desc    Signup
exports.signup = asyncHandler(async (req, res, next) => {
  const { email, password, passwordConfirm } = req.body;

  if (password !== passwordConfirm) {
    return res.status(400).json({ msg: `Password confirmation incorrect` });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ msg: `Email already exists` });
  }

  req.body.password = await bcrypt.hash(password, 12);

=======
const ApiError = require('../utils/apiError');
const createToken = require('../utils/createToken');

const User = require('../models/userModel');

// @desc    Signup
exports.signup = asyncHandler(async (req, res, next) => {
>>>>>>> b7138d88b9392c9e12a500889fc957fa8555f810
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
<<<<<<< HEAD

=======
>>>>>>> b7138d88b9392c9e12a500889fc957fa8555f810
  const token = createToken(user._id);

  res.status(201).json({ data: user, token });
});

// @desc    Login
exports.login = asyncHandler(async (req, res, next) => {
<<<<<<< HEAD
  const user = await User.findOne({ email: req.body.email });

  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    //return next(new ApiError('Incorrect email or password', 401));
  }

  const token = createToken(user._id);

=======

  const user = await User.findOne({ email: req.body.email });

  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return next(new ApiError('Incorrect email or password', 401));
  }
  const token = createToken(user._id);


  delete user._doc.password;

>>>>>>> b7138d88b9392c9e12a500889fc957fa8555f810
  res.status(200).json({ data: user, token });
});

// @desc   make sure the user is logged in
exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
<<<<<<< HEAD
    return  res.status(401).json({ msg: `You are not login, Please login to get access this route` });
=======
    return next(
      new ApiError(
        'You are not login, Please login to get access this route',
        401
      )
    );
>>>>>>> b7138d88b9392c9e12a500889fc957fa8555f810
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

<<<<<<< HEAD
  // 3) Check if user exists
  const currentUser = await User.findById(decoded.userId);
  if (!currentUser) {
    return res.status(401).json({ msg: `The user that belong to this token does no longer exist` });
  }


=======
  const currentUser = await User.findById(decoded.userId);
  if (!currentUser) {
    return next(
      new ApiError(
        'The user that belong to this token does no longer exist',
        401
      )
    );
  }


  if (currentUser.passwordChangedAt) {
    const passChangedTimestamp = parseInt(
      currentUser.passwordChangedAt.getTime() / 1000,
      10
    );
    if (passChangedTimestamp > decoded.iat) {
      return next(
        new ApiError(
          'User recently changed his password. please login again..',
          401
        )
      );
    }
  }

>>>>>>> b7138d88b9392c9e12a500889fc957fa8555f810
  req.user = currentUser;
  next();
});

// @desc    Authorization (User Permissions)
<<<<<<< HEAD
// ["admin"]
=======
// ["admin", "manager"]
>>>>>>> b7138d88b9392c9e12a500889fc957fa8555f810
exports.allowedTo = (...roles) =>
  asyncHandler(async (req, res, next) => {
    // 1) access roles
    // 2) access registered user (req.user.role)
    if (!roles.includes(req.user.role)) {
<<<<<<< HEAD
      return res.status(401).json({ msg: `You are not allowed to access this route` });
    }
    next();
  });
=======
      return next(
        new ApiError('You are not allowed to access this route', 403)
      );
    }
    next();
  });


// @desc    Reset password
exports.resetPassword = asyncHandler(async (req, res, next) => {

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(
      new ApiError(`There is no user with email ${req.body.email}`, 404)
    );
  }


  if (!user.passwordResetVerified) {
    return next(new ApiError('Reset code not verified', 400));
  }

  user.password = req.body.newPassword;
  user.passwordResetCode = undefined;
  user.passwordResetExpires = undefined;
  user.passwordResetVerified = undefined;

  await user.save();


  const token = createToken(user._id);
  res.status(200).json({ token });
});
>>>>>>> b7138d88b9392c9e12a500889fc957fa8555f810
