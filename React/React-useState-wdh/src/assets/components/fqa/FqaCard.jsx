import { useState } from "react";
const FqaCard = ({ intrebare, raspuns, raspunsLung }) => {
    const [arataRaspunsScrut, setArataRaspunsScurt] = useState(false)
    const [arataRaspunsLung, setArataRaspunsLung] = useState(false)


    const textButton = arataRaspunsScrut ? 'SHOW MORE' : 'SHOW LESS'

    const functieCareArataRaspunsulScurt = () => {
        setArataRaspunsScurt(!arataRaspunsScrut)
    }
    const functieCareArataRaspunsulLung = () => {
        setArataRaspunsLung(!arataRaspunsLung)
    }

    return (<>


        <div className='fqaCard'>
            <h5>{intrebare}</h5>
            <button onClick={functieCareArataRaspunsulScurt}>{textButton}</button>
        </div>

        {arataRaspunsScrut &&
            <div className='fqaCard'>
                <h5>{raspuns.toString()}</h5>
                {arataRaspunsScrut &&
                    <button onClick={functieCareArataRaspunsulLung}>{textButton}</button>}
            </div>
        }

        {arataRaspunsLung &&
            <div className='fqaCard'>
                <h5>{raspunsLung}</h5>
            </div>
        }


    </>);
}

export default FqaCard;