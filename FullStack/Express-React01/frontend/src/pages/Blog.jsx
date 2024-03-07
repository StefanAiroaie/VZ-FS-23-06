import AddArticleForm from "../components/admin/AddArticleForm";
import Nav from "../components/header/Nav"
import { useAppState } from "../context";
import { useEffect } from "react";

const Blog = () => {



    //import data form CONTEXT
    const { blogArticles, setBlogArticles, fetchBlogData } = useAppState()

    useEffect(() => {
        fetchBlogData();
    }, []);




    return (<>
        <Nav />

        <main className="bg-white p-3">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Das ist die Blog Page</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {blogArticles.map((blogArticle) => (
                    <div key={blogArticle.id} className="group relative">
                        <div className="aspect-video w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-video group-hover:opacity-75 ">
                            <img
                                src={blogArticle.img_url}
                                alt={blogArticle.title}
                                className="aspect-video h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href={`/blog/${blogArticle.id}`}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {blogArticle.title}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">Published: {blogArticle.published_date}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{blogArticle.author}</p>
                        </div>
                    </div>
                ))}
            </div>
            <AddArticleForm />
        </main>

    </>);
}

export default Blog;