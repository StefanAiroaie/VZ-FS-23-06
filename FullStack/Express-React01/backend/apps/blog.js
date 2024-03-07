import fs from "fs/promises"
import express from "express";
import multer from "multer";
import { fileTypeFromBuffer } from "file-type";
import { v4 as uuid } from "uuid";
import { z } from "zod";

const appBlog = express()

export const blogDataPath = "./daten/blogData.json"



const readBlogDB = async () =>
    JSON.parse(await fs.readFile(blogDataPath, { encoding: "utf-8" }));


const writeBlogDB = (newArticles) =>
    fs.writeFile(blogDataPath, JSON.stringify(newArticles));


appBlog.get("/blogdata", async (req, res) => {
    try {
        const blogData = await readBlogDB()
        res.json(blogData);
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }
});

const upload = multer({ dest: "uploads/" });

appBlog.use("/uploads", express.static("./uploads"));

appBlog.post("/blogdata", upload.single("image"), async (req, res) => {
    console.log(req.body,);
    // console.dir({ body: req.body, file: req.file });
    // const imagePath = req.file.path;
    // const imageBuffer = await fs.readFile("./" + imagePath);
    // const fileTypeResult = await fileTypeFromBuffer(imageBuffer);
    // const imagePathWithExt = `${imagePath}.${fileTypeResult.ext}`;
    // fs.rename(`./${imagePath}`, `./${imagePathWithExt}`);
    try {
        const newArticle = {
            id: uuid(),
            ...req.body,
            likes: 0
        };
        // if (!newPost.title || !newPost.blogtext || !imagePath) {
        //     throw new Error("Post undefined");
        // }

        const newArticleJson = await readBlogDB()
        const newArticles = [...newArticleJson, newArticle];
        await writeBlogDB(newArticles)


        res.status(201).json(newArticle);
    } catch (err) {
        res.status(500).end();
    }
});






// export const readServerDB = async () => {
//     const todos = await fs.readFile("./todo.json", { encoding: "utf-8" });
//     return JSON.parse(todos);
// }



export default appBlog