const mongoose = require("mongoose")
const { Schema, model } = mongoose

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


module.exports = puppies