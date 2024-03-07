import Nav from "../components/header/Nav";
import ToDoContainer from "../components/todoapp/ToDoContainer";

const Home = () => {
    return (
        <>
            <Nav />
            <main>
                <h3>welcome to my app</h3>
                <ToDoContainer />
            </main>
        </>
    );
}

export default Home;