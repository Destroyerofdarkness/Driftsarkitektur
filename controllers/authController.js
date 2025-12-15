const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, "secret", {
    expiresIn: 3 * 60 * 60,
  });
};

const render_register = (req, res) => {
  try {
    res.render("register.ejs");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const register_user = async (req, res) => {
  const { user, pass } = req.body;
  try {
    const createdUser = await User.register(user, pass);
    const token = createToken(createdUser._id);
    console.log(token);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * 1000 });
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(301).send(err);
  }
};

const render_login = (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log("Failed to load in login Page:", err);
    res.status(500).send(err);
  }
};

const login_user = async (req, res) => {
  const { user, pass } = req.body;
  try {
    const foundUser = await User.login(user, pass);
    const token = createToken(foundUser._id);
    console.log(token);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * 1000 });
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(301).redirect("/login");
  }
};

const logout_user = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/login");
};

module.exports = {
  render_login,
  login_user,
  logout_user,
  render_register,
  register_user
};
