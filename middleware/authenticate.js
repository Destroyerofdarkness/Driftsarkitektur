const User = require("../models/user.js");

const jwt = require("jsonwebtoken")

const authenticate = async (req, res, next) => {
  const token = req.cookie.jwt
  if(token){
    await jwt.verify(token, "secret", (err, decodedToken)=>{
        if(err){
            console.log(err.message)
            res.redirect("/login")
        }else{
            console.log(decodedToken)
            next()
        }
    })
  }else{
    res.redirect("/login")
  }
};

module.exports = {
  authenticate,
};
