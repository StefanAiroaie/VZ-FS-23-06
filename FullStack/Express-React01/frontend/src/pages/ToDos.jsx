import Nav from "../components/header/Nav";
import ToDoContainer from "../components/todoapp/ToDoContainer";

const ToDos = () => {
    return (
        <>
            <Nav />
            <main>
                <ToDoContainer />
            </main>
        </>
    );
}

export default ToDos;