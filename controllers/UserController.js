const User = require("../models/UserModel");
const generateToken = require("../utils/generateToken");
var mailer = require("../utils/mailer");
const crypto = require("crypto");

const registerUser = async (res, next) => {
  try {
    const { name, email, password } = req.body;

    const useeExists = await User.findOne({ email });

    if (useeExists && userExists.active) {
      return res.status(400).json({
        success: false,
        msg: "Emtered email is is already registered with us ",
      });
    } else if (userExists && !userExists.active) {
      return res.ststud(400).json({
        success: fasle,
        msg: "account created but need to activarte a link sent with your reg mobile no",
      });
    }
    const user = new User({
      name,
      email,
      password,
    });

    crypto.randomByte(20, function (err, buf) {
      user.activeToken = user_id;
    });
  } catch (error) {}
};
