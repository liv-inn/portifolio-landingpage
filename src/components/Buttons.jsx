import { Link } from "react-router-dom";

function Buttons({ icon, title, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <button className="flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300">
        <i className={icon}></i>
        <span className="text-lg font-semibold">{title}</span>
      </button>
    </a>
  );
}

export default Buttons;
