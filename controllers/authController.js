const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
    return jwt.sign({id}, "secret", {
        expiresIn: 3*60*60
    })
}

const render_login = (req,res)=>{
    try{
        res.render("login")
    }
    catch(err){
        console.log("Failed to load in login Page:", err)
        res.status(500).send(err)
    }
};

const login_user = async (req,res)=>{
    const {user,pass} = req.body
    try{
        const foundUser = await User.findOne({user:user})
        if(foundUser.pass == pass){
            req.session.userId = foundUser._id
            console.log(req.session)
            const token = createToken(foundUser._id)
            console.log(token)
            res.redirect("/")
        }
    }catch(err){
        console.log(err)
        res.status(300).redirect("/login")
    }
}





module.exports = {
  render_login,
  login_user,
}