const ToDo = ({ task }) => {



    // console.log(task.task);
    return (
        <>
            <div className="todotask">
                <p className="taskName">{task.task}</p>
                <button><p className="delete">delete</p></button>
                {/* <button><p className="edit">edit</p></button> */}
            </div>
        </>
    );
}

export default ToDo;