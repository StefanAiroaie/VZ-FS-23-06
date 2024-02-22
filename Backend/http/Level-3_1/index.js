import http from "http"
import fs from "fs"


const importPages = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.end("Page not found")
        }
        else {
            res.end(data)
        }
    })

}

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        importPages("./public/home.html", res)
    }
    else {
        importPages(`./public${req.url}`, res)
    }
})



// server listner
server.listen(3500, () => {
    console.log("http://localhost:3500 has started");
})