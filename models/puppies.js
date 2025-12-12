const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const argon2 = require("argon2")

const puppySchema = new Schema({
    Navn:{
        type: String,
        required: true,
    },
    Power:{
        type:String,
        required:true,
    },
    Bestevenn:{
        type:String,
        required:true
    },
    Fødselsdato:{
        type:String,
        required:true
    },
    Bildelenke:{
        type: String,
        required:true
    }
})


const puppies = model("Puppies", puppySchema)

puppySchema.pre("save", async function(next){
try{
 this.passwd = await argon2.hash(this.pass)
 next()

}catch(err){
    next(err)
}
})


module.exports = puppies