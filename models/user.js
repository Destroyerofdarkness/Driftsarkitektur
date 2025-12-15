const {Schema, model} = require("mongoose")
const argon2 = require("argon2")

const userSchema = new Schema({
    user: {
        required:true,
        type: String
    },
    pass:{
        required:true,
        type:String
    }
})


userSchema.statics.login = async function(username,passwd) {
        const User = await user.findOne({user:username})
        if(User){
        console.log("USER:",User)
        const pass = argon2.verify(User.pass, passwd)
        if(pass){
        return User;
        }
        throw Error("Password is not correct")
    }
    throw Error("User does not exist")
}

userSchema.statics.register = async function(username, passwd){
    const hashedPass = await argon2.hash(passwd)
    const User = new user({
        user: username,
        pass:hashedPass,
    })
    console.log("New User:", User)
    await User.save();
    return User;
}


const user = model("users", userSchema)


module.exports = user