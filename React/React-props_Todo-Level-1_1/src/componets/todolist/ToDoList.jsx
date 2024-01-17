import ToDoTask from "../todo/ToDoTask";

const ToDoList = ({ myToDoList }) => {




    return (<>
        <h1>hei, hier soll kommen tasks</h1>
        {myToDoList.map((eachtodo) => {
            return (

                <ToDoTask key={eachtodo.todo} props={eachtodo.todo} />

            )

        })}

    </>);
}

export default ToDoList;