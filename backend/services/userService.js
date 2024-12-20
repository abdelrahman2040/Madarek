const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const slugify = require('slugify');
const bcrypt = require('bcryptjs');

// @desc    Get list of users
exports.getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({ data: users });
});

// @desc    Get specific user by id
exports.getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ msg: `No user for this id ${req.params.id}` });
  }
  res.status(200).json({ data: user });
});

// @desc    Create a new user
exports.createUser = asyncHandler(async (req, res) => {

  const { password, passwordConfirm } = req.body;
  if(password !==passwordConfirm) return res.status(404).json({ msg: ` Password Confirmation incorrect` });
  req.body.password = await bcrypt.hash(password, 12);
  const user = await User.create(req.body);

  res.status(201).json({ data: user });
});

// @desc    Update specific user
exports.updateUser = asyncHandler(async (req, res) => {
  const { password, passwordConfirm } = req.body;
  if(password !==passwordConfirm) return res.status(404).json({ msg: ` Password Confirmation incorrect` });
  req.body.password = await bcrypt.hash(password, 12);
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  if (!user) {
    return res.status(404).json({ msg: `No user for this id ${req.params.id}` });
  }
  res.status(200).json({ data: user });
});

// @desc    Delete specific user
exports.deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(404).json({ msg: `No user for this id ${req.params.id}` });
  }
  res.status(204).send();
});
