import Header from '../components/Header';
import data from '../source.json';
import FCCategory from '../components/Category';

let categories = Object.keys(data['review-questions']);

let Flashcards = () => {
    return (
        <div id="wrapper">
            <Header />
            <div className='main-content-panel'>
                <div></div>
                <div className='category-list'>
                    <h2>Flashcard Categories:</h2>
                    {categories.map((category, index)=>(
                        <FCCategory category={category} items={data['review-questions'][category].length}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Flashcards;