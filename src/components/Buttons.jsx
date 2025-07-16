import { Link } from "react-router-dom";

function Buttons({ icon, title, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <button className="flex items-center space-x-4 bg-black/30 hover:bg-purple-600 text-white px-4 py-2 rounded-xl shadow-md transition duration-300 w-60 h-14 justify-center border-white border-2 mb-2">
        <i className={`${icon} text-2xl`}></i>
        <span className="text-lg font-semibold">{title}</span>
      </button>
    </a>
  );
}

export default Buttons;
