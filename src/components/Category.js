import {useNavigate} from 'react-router-dom';

let FCCategory =({category, items})=> {
    const navigate = useNavigate();
    const handleOnClick = () => navigate('/FlashcardPage');

    return (
        <div className="fccategory" onClick={handleOnClick}>
            <p>{category}</p>
            <p>{items}</p>
        </div>
    )
}
export default FCCategory;