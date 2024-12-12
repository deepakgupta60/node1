const express = require("express")

const currData = require("./currency.json")
const app = express();
const port = 8082;

app.get("/",(req,res)=>{
    res.send("<h1 style='color:green'> Date in html</h1>")
})


// app.get("/currency",(req,res)=>{
//     res.send(currData)
// })

app.get("/currency/:cid",(req,res)=>{
    // console.log(req.params.symbol)

    const {cid}=req.params;
    let ans=currData.data.find(data=>data.id==cid.toUpperCase())
    if(ans)
        return res.send(ans)
    res.status(404).send({message:`could not found: ${cid}`})
})


app.get("/currency",(req,res)=>{
    const {min_value}=req.query;
    if(min_value)
        return res.send(currData.data.filter((data)=>data.min_size==min_value))

    res.send(currData.data)

    // console.log(req.query)
})
app.get("/mycurr/:cid",(req,res)=>{
    const resAns = currData.data.find(data=>data.id==req.params.cid.toUpperCase())
    resAns ? res.send(resAns) : res.status(404).send({message:`currency not found: ${req.params.cid}`})
})

app.listen(port,()=>{
    console.log(`Server started at ${port}`);
})