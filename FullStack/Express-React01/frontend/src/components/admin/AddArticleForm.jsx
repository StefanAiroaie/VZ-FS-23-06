import { useAppState } from "../../context";
import { useRef, useState } from "react";

const AddArticleForm = () => {

    const { blogArticles, setBlogArticles } = useAppState();

    // use state from context
    const { value, setValue, addTodo } = useAppState();

    //set the walue from input field aka adds the task
    const submitArticle = e => {
        e.preventDefault()
        console.log("value", value);
        setValue("")

    }


    return (
        <>
            <h1>add Article form - adds an article to blog</h1>

            <div className="p-3">
                <form className="addtotodoform flex gap-3 justify-between mb-3" onSubmit={submitArticle}>
                    <input
                        type="text"
                        name="Article Name"
                        onChange={(e) => setValue(e.target.value)} value={value}
                        className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="write your Article Name here"
                    />
                    {/* <input
                        type="text"
                        name="Description"
                        onChange={(e) => setValue(e.target.value)} value={value}
                        className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="write your Description here"
                    /> */}
                    <button
                        className="bg-indigo-500 rounded hover:bg-indigo-900 text-s text-white p-3"
                        type="submit">add
                    </button>
                </form >
            </div>
        </>
    );
}

export default AddArticleForm;