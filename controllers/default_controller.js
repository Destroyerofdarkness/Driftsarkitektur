const render_index = (req,res)=>{
    try{
        res.render("index")
    }
    catch(err){
        res.status(500).send("Internal Server Error", err)
    }
}

module.exports = {
    render_index
}