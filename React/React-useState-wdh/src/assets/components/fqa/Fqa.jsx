import FqaCard from './FqaCard'
import data from '../../Data'


const Fqa = () => {

    const fqas = [
        {
            intrebare: 'Ce este React?',
            raspuns: 'React este o bibliotecă JavaScript pentru construirea interfețelor cu utilizatorul.',
            raspunsLung: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quas fugiat saepe doloribus minus voluptate, hic reiciendis suscipit perferendis odit officia explicabo. Illum vitae praesentium eligendi. Similique, iste. Magnam officia, ex magni accusamus atque obcaecati temporibus, debitis ullam officiis harum est quos nisi! Illum doloribus, praesentium deserunt nam rem tenetur?"
        },
        {
            intrebare: 'De ce să folosim React?',
            raspuns: 'React oferă o modalitate eficientă de a crea și actualiza interfețe cu utilizatorul.',
            raspunsLung: 'React oferă o modalitate eficientă de a crea și actualiza interfețe cu utilizatorul.'
        }
    ]


    return (<>
        <h3>FQA EASY</h3>
        <section className='fqaList'>
            <FqaCard
                intrebare={fqas[0].intrebare}
                raspuns={fqas[0].raspuns}
                raspunsLung={fqas[0].raspunsLung}
            />
        </section>
        <section className='fqaList'>
            <h3>FQA with MAP form ein Variable</h3>
            {fqas.map((fqa, index) => (
                <FqaCard key={index} intrebare={fqa.intrebare} raspuns={fqa.raspuns} raspunsLung={fqa.raspunsLung} />

            ))}
        </section>

        <section className='fqaList'>
            <h3>FQA with MAP from DB</h3>
            {data.map((fqa, index) => (
                <FqaCard key={index} intrebare={fqa.question} raspuns={fqa.answer} raspunsLung={fqa.answerLong} />

            ))}
        </section>



    </>);
}

export default Fqa;