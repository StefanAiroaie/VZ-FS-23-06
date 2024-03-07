

export const fetchBlogData = () =>
    fetch("http://localhost:3500/blog").then((response) => response.json());
    then((response) => response.json())
            .then((todos) => {
                setTodos(todos);
            });
