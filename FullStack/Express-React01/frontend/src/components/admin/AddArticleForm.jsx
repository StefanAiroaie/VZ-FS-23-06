import { useAppState } from "../../context";
import { useRef, useState } from "react";

const AddArticleForm = () => {

    const { addArticle, sendMessage } = useAppState();

    const formRef = useRef();
    console.log("formRef", formRef);






    const submitArticle = async (event) => {
        event.preventDefault()
        const formData = new FormData(formRef.current)
        addArticle(formData)
        formRef.current.reset();
    };




    return (
        <>
            <h1>add Article form - adds an article to blog</h1>
            <p>aici este mesajul sau eroarea {sendMessage}</p>
            <form ref={formRef} onSubmit={submitArticle}>
                <label className="block mb-3">
                    <p>title</p>
                    <input
                        required name="title" type="text" placeholder="Name" />
                </label>
                <label className="block mb-3">
                    <p>Add Photo</p>
                    <input required type="file" name="image" />
                </label>
                <label className="block mb-3">
                    <p>Description</p>
                    <input
                        required
                        type="text"
                        placeholder="Description"
                        name="description"
                    />
                </label>

                <button
                    type="submit"
                    className="bg-gray-800 text-white p-2 rounded-md shadow-md"
                >
                    Add Article
                </button>
            </form>







        </>
    );
}

export default AddArticleForm;