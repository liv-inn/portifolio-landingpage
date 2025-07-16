import { Link } from "react-router-dom";

function Nav(){
    return (
        <nav>
            <ul className=" p-6 flex justify-end space-x-20">
                
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;