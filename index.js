const http = require("http")
const server = http.createServer((req, res)=>{
    console.log("request received")
    const serverInfo={
        name:"crio-server",
        version:"1.23.4"
    }

    res.writeHead(200, {"content-type":"text/html"})
    // res.write(JSON.stringify(serverInfo))
    res.write("<h1>Hello</h1>")
    res.end("<h3>server end</h3>")
})

const port = 8082
server.listen(port,()=>{
    console.log(`Server started at Port: ${port}`)
})