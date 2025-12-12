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

const puppy_render = async (req,res)=>{
    const pup = req.params.navn
    console.log(pup)
    try{
        const foundPuppy = await puppy.findOne({
            Navn: pup
        })
        res.render("puppy_page",{puppy: foundPuppy})
    }
    catch{
        res.status(500).send("Internal Server Error", err)
    }
}

const destroy_session = async (req,res)=>{
    try{
        req.session.destroy()
        res.redirect("/login")
    }catch(err){
        console.log(err)
        res.status(300).send(err)
    }
}

module.exports = {
    render_index,
    puppy_render,
    destroy_session
}