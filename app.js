const express = require("express");

const os = require("os")

const app = express();

const default_router = require("./routes/default_routes.js")

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.set("view engine", "ejs")

app.use(default_router)

app.listen(3000, ()=>{
    console.log("Server running on port 3000 and on", os.hostname())
})