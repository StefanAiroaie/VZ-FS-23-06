import { useParams } from "react-router-dom";
import Nav from "../components/header/Nav";
import { useAppState } from "../context";
import { useEffect } from "react";
const BlogDetail = () => {

    //import data form CONTEXT
    const { articles, getArticles } = useAppState()

    useEffect(() => {
        getArticles();
    }, []);

    const id = useParams();


    console.log("dsds", articles);
    const blogArticle = articles.filter((article) => {
        console.log("aici este id", article.id);
        return article.id === id.id
    })

    const serverAdress = "http://localhost:3500/"

    return (
        <>
            <main className="bg-white">
                <img
                    src={`${serverAdress}${blogArticle[0]?.imagePath}`}
                    alt={blogArticle[0]?.title}
                    className="aspect-video h-40 w-full object-cover object-center"
                />
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">

                    <div>

                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{blogArticle[0]?.title}</h2>
                        <p>{blogArticle[0]?.published_date} - {blogArticle[0]?.author}</p>

                        <p className="mt-4 text-gray-500">
                            {blogArticle[0]?.description}
                        </p>


                    </div>

                    <img
                        src={`${serverAdress}${blogArticle[0]?.imagePath}`}
                        alt={blogArticle[0]?.title}
                        className="aspect-video h-full w-full object-cover object-center"
                    />



                </div>
            </main>





        </>

    );
}

export default BlogDetail;