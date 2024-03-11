import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// import { fetchBlogData } from "./api"


const StateContext = createContext({
    todos: [],
});

export const useAppState = () => useContext(StateContext);

export const AppStateProvider = ({ children }) => {



    // input filed value aka task
    const [value, setValue] = useState()
    const [todos, setTodos] = useState([]);


    //import blog articles
    const [articles, setArticles] = useState([])

    //upload done or error mesage
    const [sendMessage, setSendMessage] = useState("")




    const getServersTasks = () => {
        fetch('http://localhost:3500/api-todo')
            .then((response) => response.json())
            .then((todos) => {
                console.log("todos aici", todos);
                setTodos(todos);
            });

    };








    const getArticles = async () => {
        const response = await fetch("http://localhost:3500/blogdata");
        const data = await response.json();
        console.log("aici trebuei sa vin datele de pe server", data);
        return data;
    }


    //le trimite pe server
    const postArticle = (newArticle) =>
        fetch("http://localhost:3500/blogdata", {
            method: "POST",
            body: newArticle
        }).then((response) => response.json());


    const updateArticles = async () => {
        try {
            setArticles(await getArticles())
        }
        catch (err) {
            console.error(err);
        }
    }


    const addArticle = async (newArticle) => {
        try {
            await postArticle(newArticle)
            updateArticles()
            setSendMessage("the article was succesfull added")
        }
        catch (err) {
            console.error(err);
            if (err.response && err.response.status === 400) {
                // Afișăm un mesaj de eroare specific în caz de eroare 400
                setSendMessage("Eroare: nu s-au putut adăuga articolul. Te rog verifică datele introduse.");
            } else {
                // Afișăm un mesaj de eroare generic în caz de alte erori
                setSendMessage("A apărut o eroare. Te rog încearcă din nou mai târziu.");
            }
        }
    }


    // AIIIIIIII
    // const getBirds = () =>
    //     fetch("http://localhost:3000/birds").then((response) => response.json());

    // const updateBirds = async () => {
    //     try {
    //         setBirds(await getBirds());
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // const addBird = async (birdData) => {
    //     try {
    //         await postBird(birdData);
    //         updateBirds();
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // IIIIIIII


    // const addArticleToServer = (article) => {
    //     const newArticle = {
    //         title: article,
    //     }
    //     setBlogArticles([...blogArticles, newArticle])
    //     fetch("http://localhost:3500/blogdata", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(newArticle)

    //     })
    //         .then(() => {
    //             fetchBlogData()
    //         })
    //         .catch(() => {
    //             console.error(err);
    //         })
    // }




    const addTodo = (todo) => {
        // new task
        const newTodo = {
            id: uuidv4(),
            task: todo,
            completed: false,
            isEditing: false
        }
        setTodos([...todos, newTodo])
        // fetch the task
        fetch('http://localhost:3500/api-todo', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo)

        })
            .then(() => {
                getServersTasks();
            })
            .catch((err) => {
                console.error(err);
            })
    }




    return (
        <StateContext.Provider value={{ todos, getServersTasks, setTodos, value, setValue, addTodo, articles, setArticles, addArticle, updateArticles, getArticles, sendMessage }}>
            {children}
        </StateContext.Provider>
    );
};