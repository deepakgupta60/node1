const express = require("express")

const currData = require("./currency.json")
const app = express();
const port = 8082;

app.get("/",(req,res)=>{
    res.send("<h1 style='color:green'> Date in html</h1>")
})


app.get("/currency",(req,res)=>{
    res.send(currData)
})

app.get("/currency/:symbol",(req,res)=>{
    // console.log(req.params.symbol)
    let ans=currData.data.find(data=>data.id==req.params.symbol.toUpperCase())
    if(ans)
        return res.send(ans)
    res.status(404).send({message:`could not found: ${req.params.symbol}`})
})

app.get("/mycurr/:cid",(req,res)=>{
    const resAns = currData.data.find(data=>data.id==req.params.cid.toUpperCase())
    resAns ? res.send(resAns) : res.status(404).send({message:`currency not found: ${req.params.cid}`})
})

app.listen(port,()=>{
    console.log(`Server started at ${port}`);
})