import {useNavigate} from 'react-router-dom';

let FCCategory =({category, items})=> {
    const navigate = useNavigate();
    const handleOnClick = () => navigate('/Flashcards/'+category);

    return (
        <div className="fccategory" onClick={handleOnClick}>
            <p className='fccategory__title' style={{textTransform: 'capitalize'}}>{category}</p>
            <p># of flashcards: {items}</p>
        </div>
    )
}
export default FCCategory;