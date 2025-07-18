import { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="hidden md:block">
        <ul className="p-6 flex space-x-8 lg:space-x-20 items-center ml-6">
          <li>
            <h1 className="text-xl lg:text-2xl font-bold text-white">
              &lt;LiviaNeves /&gt;
            </h1>
          </li>
          <li>
            <a
              href="#about"
              className="text-white font-bold hover:text-pink-300 transition text-sm lg:text-base"
            >
              Sobre mim
            </a>
          </li>
          <li>
            <a
              href="https://github.com/liv-inn"
              className="text-white font-bold hover:text-pink-300 transition text-sm lg:text-base"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white font-bold hover:text-pink-300 transition text-sm lg:text-base"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>

      <div className="md:hidden">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-lg font-bold text-white">
            &lt;LiviaNeves /&gt;
          </h1>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800 z-50">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <a
                  href="#about"
                  className="text-white font-bold hover:text-pink-300 transition block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre mim
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/liv-inn"
                  className="text-white font-bold hover:text-pink-300 transition block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white font-bold hover:text-pink-300 transition block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;