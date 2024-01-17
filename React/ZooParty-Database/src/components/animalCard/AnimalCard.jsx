
const AnimlaCard = ({ animalName, animalSpecie, animlaDiet, animlaBild, animalLifeSpan, animalHabitat, animalFacts }) => {

    console.log(animalFacts);

    return (<>

        <figure>{animlaBild}</figure>
        <h2>{animalName}</h2>
        <h5>{animalSpecie}</h5>
        <p>{animlaDiet}</p>
        <p>{animalHabitat}</p>
        <h6>I be likely to live {animalLifeSpan} years</h6>
        {animalFacts.map((animlaFact =>
            <li>{animlaFact}</li>
        ))}



    </>);
}

export default AnimlaCard;