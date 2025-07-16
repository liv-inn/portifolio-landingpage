import { Link } from "react-router-dom";

function Nav(){
    return (
        <nav>
            <ul className=" p-6 flex  space-x-20 items-center">
                <li><h1 className="text-2xl font-bold text-white">
  &lt;LiviaNeves /&gt;
</h1>
</li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;