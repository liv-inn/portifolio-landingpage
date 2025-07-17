import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="p-6 flex space-x-20 items-center ml-6">
        <li>
          <h1 className="text-2xl font-bold text-white">
            &lt;LiviaNeves /&gt;
          </h1>
        </li>
        <li>
          <a
            href="#about"
            className="text-white font-bold hover:text-pink-300 transition"
          >
            Sobre mim
          </a>
        </li>
        <li>
          <a
            href="https://github.com/liv-inn"
            className="text-white font-bold hover:text-pink-300 transition"
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-white font-bold hover:text-pink-300 transition"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
