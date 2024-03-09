import fs from "fs/promises"
import express from "express";
import multer from "multer";
import { fileTypeFromBuffer } from "file-type";
import { v4 as uuid } from "uuid";
import { z } from "zod";

const appBlog = express.Router()


const blogDataPath = "./blog/blogData.json"

const upload = multer({ dest: "blog/uploads/" });
appBlog.use("/blog/uploads/", express.static("./blog/uploads/"));


try {
    await fs.access("./blog/blogData.json")
} catch (err) {
    await fs.writeFile("./blog/blogData.json", JSON.stringify([]))

}



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



appBlog.post("/blogdata", upload.single("image"), async (req, res) => {
    // wir definieren via Zod ein Schema, das wir spaeter nutzen koennen um unsere
    // inputs zu validieren / zu parsen
    const BirdInputSchema = z.object({
        title: z.string().min(4).max(50),
        description: z.string(),
        imagePath: z.string(),
    });
    try {
        console.log(req.body,);
        // console.dir({ body: req.body, file: req.file });
        const imagePath = req.file.path;
        console.log(req.file.path);
        const imageBuffer = await fs.readFile("./" + imagePath);
        const fileTypeResult = await fileTypeFromBuffer(imageBuffer);
        const imagePathWithExt = `${imagePath}.${fileTypeResult.ext}`;
        fs.rename(`./${imagePath}`, `./${imagePathWithExt}`);


        const parsedInput = BirdInputSchema.safeParse({
            ...req.body,
            imagePath: imagePathWithExt,
        });

        // falls parsen nicht erfolgreich war, beenden wir den request mit fehler 400
        if (!parsedInput.success) {
            console.error(parsedInput.error);
            res.sendStatus(400);
            return;
        }


        const newArticle = {
            id: uuid(),
            ...req.body,
            likes: 0,
            imagePath: `${imagePathWithExt}`,
        };
        if (!newArticle.title || !newArticle.description || !imagePath) {
            throw new Error("Post undefined");
        }

        const newArticleJson = await readBlogDB()
        const newArticles = [...newArticleJson, newArticle];
        await writeBlogDB(newArticles)


        res.status(201).json(newArticle);
    } catch (err) {
        res.status(500).end();
    }



})





export default appBlog