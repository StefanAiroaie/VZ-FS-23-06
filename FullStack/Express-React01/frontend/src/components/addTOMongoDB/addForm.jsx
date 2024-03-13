import { useRef } from "react";
import { useAppState } from "../../context";


const AddForm = () => {



    const { setExpense, fetchExpenses, postExpenses } = useAppState();


    const priceInputRef = useRef()
    const titleInputRef = useRef()
    const bodyInputRef = useRef()
    const formRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()

        const title = titleInputRef.current.value
        const price = priceInputRef.current.value
        const body = bodyInputRef.current.value

        postExpenses({ title, price, body })
        fetchExpenses()

        console.log("hei aici e form", formRef);

    }
    return (<>
        <div className="p-4">
            <form onSubmit={handleSubmit} ref={formRef}>
                <input ref={priceInputRef} type="number" name="price" placeholder="Preis" />
                <input ref={titleInputRef} type="text" name="title" placeholder="Titel" />
                <input ref={bodyInputRef} type="text" name="body" placeholder="descriere" />
                <button className="bg-gray-800 text-white p-2 rounded-md shadow-md" >Eintragen</button>
            </form>
        </div>
    </>);
}

export default AddForm;