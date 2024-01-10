import data from '../source.json'
import Header from '../components/Header';

let complexities = data.complexitiesO

complexities.sort((a,b)=>b.rank-a.rank)

let Exercises =()=> {
    return (
        <div id="wrapper">
            <Header />
            <div className='stack'>
                {complexities.map((complexity, index)=>(
                    <section>
                        <ul>{complexity.symbol}</ul>
                    </section>
                ))}
            </div>
        </div>
    );
}
export default Exercises;