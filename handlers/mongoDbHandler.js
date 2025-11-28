const mongoose = require("mongoose")

async function connectToMongoDb(){
    try{
         const result = await mongoose.connect("mongodb://10.12.14.201:27017/", {dbName: "driftsarkitektur"})
         console.log("connected to mongoDb:", mongoose.connection.name)
    }catch(err){
        console.log("Error with connecting with mongoDB on ./handlers/mongoDbHandler.js and the error is:",err)
    }
}

module.exports = {connectToMongoDb}