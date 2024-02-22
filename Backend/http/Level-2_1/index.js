import http from "http"
import fs from "fs"


const sendAfileFunc = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("Not found");
        }
        else {
            res.end(data)
        }
    })

}

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        sendAfileFunc("./public/home.html", res)

    }
    else {
        sendAfileFunc(`./public${req.url
            }`, res);
    }

})




server.listen(3300, () => {
    console.log("hei server ist an http://localhost:3300");
})
