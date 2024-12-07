const http = require("http")

const server = http.createServer((req, res)=>{
    
    const serverInfo = {
        name:"axios server",
        version:"299.24"
    }
    res.writeHead(200,{"content-type":"application/json"})

    res.write(JSON.stringify(serverInfo))
    res.end();
})

server.listen(8083,()=>{
    console.log("Server started at port no. 8082")
})