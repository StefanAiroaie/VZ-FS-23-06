const ToDo = ({ task }) => {



    // console.log(task.task);
    return (
        <>

            <div className="flex gap-2 justify-between border rounded p-3">
                <p className="text text-left">{task.task}</p>
                <button><p className="delete">delete</p></button>
                {/* <button><p className="edit">edit</p></button> */}
            </div>

        </>
    );
}

export default ToDo;