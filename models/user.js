const {Schema, model} = require("mongoose")


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

const user = model("users", userSchema)


module.exports = user