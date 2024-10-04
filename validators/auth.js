const { check } = require("express-validator");

const signupValidator = [
  check("name").notEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Invalid Email").notEmpty().withMessage("Email is required"),
  check("password").isLength({min: 6}).withMessage("Password should be 6 char long").notEmpty().withMessage("password is required"),
];

module.exports = { signupValidator };