import "./animals.css"
import AnimlaCard from "../animalCard/AnimalCard";


const Animals = ({ data }) => {

    console.log("data" + data);


    return (<>

        {data.map((animal, index) => {
            return (
                <div className="animalsCard">
                    <AnimlaCard
                        animalName={animal.name}
                        animalSpecie={animal.species}
                        animlaDiet={animal.diet}
                        animlaBild={animal.emoji}
                        animalLifeSpan={animal.lifespan}
                        animalHabitat={animal.habitat}
                        animalFacts={animal.funFacts}


                    /></div>

            )
        })}


    </>);
}

export default Animals;