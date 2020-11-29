const express = require("express")

const app = express();
app.get(`/home`,function (req,res){
    res.send(
            {
                name:"Naci Aytı"
            }
            )
})
app.listen(3030,()=>console.log(`Start with 3000 port`))