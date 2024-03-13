
import { useAppState } from "../../context";
import { useEffect } from "react";

const ShowDB = () => {



    useEffect(() => {
        fetchExpenses();
    }, []);

    const { fetchExpenses, expenses } = useAppState();

    const totalPrice = expenses.reduce((total, expense) => expense.price + total, 0)

    console.log("tessssst", expenses);

    return (
        <>
            <section className="p-3">
                <h1>hier soll die Daten from MONGO db sein</h1>
                <div className="p-3">
                    {expenses?.map((expense) => {
                        return (
                            < div key={expense?._id
                            }>
                                <p>{expense?.title}: {expense.price}€</p>
                            </div>
                        )
                    })}
                </div >

                <h4><strong>Total price: {totalPrice.toFixed(2)}€</strong></h4>
            </section>


        </>
    );
}

export default ShowDB;