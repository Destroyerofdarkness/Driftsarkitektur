const User = require("../models/user.js");

const authenticate = async (req, res, next) => {
  const user = req.session.userId;
  try {
    if (user) {
      const userExist = await User.findById(user);
      if (userExist) {
        console.log("Verified User succesfully");
        next();
        return;
      }
      throw new Error(
        "Authentication failed. Didn't find user in the database"
      );
    }
    throw new Error("Authentication failed. Didn't find session");
  } catch (err) {
    console.log(err);
    res.redirect("/login");
  }
};

module.exports = {
  authenticate,
};
