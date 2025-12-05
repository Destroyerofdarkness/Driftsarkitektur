const puppy = require("../models/puppies.js")

const render_index = async (req,res)=>{
    try{
        const puppies = await puppy.find()
        console.log(puppies)
        res.render("index", {puppies})
    }
    catch(err){
        res.status(500).send("Internal Server Error", err)
    }
}

module.exports = {
    render_index
}