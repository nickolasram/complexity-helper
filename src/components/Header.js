import {Link} from "react-router-dom";

let Header =()=>{
    return (
    <section className="banner">
        <h1><Link to={"/"}>Complexity Helper</Link></h1>
        <p><Link to={"/Exercises"}>Exercises</Link></p>
        <p><Link to={"/Flashcards"}>Flashcards</Link></p>
        <p><Link to={"/Tutorial"}>Tutorials</Link></p>
    </section>
    );
}
export default Header;