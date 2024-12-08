const http = require("http")

const currencyData = require("./currency.json")
// const { json } = require("express")
const server = http.createServer((req, res)=>{
    // console.log(req)
    
    
    // const serverInfo= {
    //     name:"node server",
    //     version:"2.2"

    // }

    
    // if(req.url =="/")
    // {
    //     res.writeHead(200, {"content-type":"text/html"})
    //     res.end("<h1>Currency Database</h1>");
    
    // }
    // else if(req.url=="/currency"){
    //     res.writeHead(200, {"content-type":"application/json"})
    //     res.end(JSON.stringify(currencyData))
    // }
    // else
    // {
    //     res.writeHead(404, {"content-type":"application/json"})
    //     res.end(JSON.stringify({message:`Route: ${req.url} not found`}))
    // }

    switch(req.url)
    {
        case "/":
            res.writeHead(200,{"content-type":"text/html"})
            res.end("<h1>Datebase currency</h1>");
            break;
        case "/currency":
            res.writeHead(200, {"content-type":"application/json"})
            res.end(JSON.stringify(currencyData))
            break;
        default:
            res.writeHead(404, {"content-type":"application/json"})
            res.end(JSON.stringify({message:`Route: ${req.url} not found`}))
            break;
    }
})

server.listen(8082, ()=>{
    console.log("Server started at port number: 8082")
})


