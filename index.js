const express = require("express")
const app = express()

app.get("/", (req, res, next) =>{
    res.send("Seccesful response.")
    res.render("index")
   
});

app.listen(3000, ()=> console.log("Example app is loading"))