const express = require("express");

const os = require("os")

const app = express();

const session = require("express-session")

const mongoDbHandler = require("./handlers/mongoDbHandler.js")

const default_router = require("./routes/default_routes.js");

const auth_routes = require("./routes/auth_routes.js")

mongoDbHandler.connectToMongoDb();

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.set("view engine", "ejs")

app.use(session({
    secret: "AshenOne",
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 *60 *10,
        secure: false
    }
}))

app.use(default_router)

app.use(auth_routes)



app.listen(3000, ()=>{
    console.log("Server running on port 3000 and on", os.hostname())
})