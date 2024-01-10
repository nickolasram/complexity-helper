import {Link} from "react-router-dom";

let Header =()=>{
    return (
    <section className="banner">
        <h1><Link to={"/"}>Complexity Helper</Link></h1>
        <p><Link to={"/Exercises"}>Exercises</Link></p>
        <p><a>Flash Cards</a></p>
    </section>
    );
}
export default Header;