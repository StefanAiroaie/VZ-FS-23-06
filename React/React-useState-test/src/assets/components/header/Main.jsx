import { useState } from "react";

const Main = ({ kontoStand, setKontoStand }) => {


    const [inputValue, setInputValue] = useState("")
    return (<>

        <h1>test</h1>
        <p>{kontoStand}</p>
        <input
            type="number"
            placeholder="gib summe ein"
            onChange={(e) => setInputValue(Number(e.target.value))}


        />
        <button onClick={() => {
            setKontoStand(newKontoStand => newKontoStand + Number(inputValue))
            setInputValue("")
        }}>einzahlen</button>
        <button onClick={() => {
            setKontoStand(newKontoStand => newKontoStand - Number(inputValue)) // newKontoStand ist der alte Wert
            setInputValue("")
        }}>auszahlen</button>
    </>);
}

export default Main;