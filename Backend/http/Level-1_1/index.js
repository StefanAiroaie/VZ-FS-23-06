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
        // fs.readFile("./public/home.html", (err, data) => {
        //     if (err) {
        //         console.error(err);
        //     }
        //     res.end(data)
        // })
    }
    else {
        sendAfileFunc(`./public${req.url
            }`, res);
    }
    // else {
    //     res.writeHead(404)
    //     res.end("file not found")
    // }
})





// else {
//     res.writeHead(404)
//     res.end("not found")
//     console.log("hei was is das");
// }



server.listen(3000, () => {
    console.log("hei server ist an http://localhost:3000");
})
