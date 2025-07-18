function Buttons({ icon, title, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block w-full sm:w-auto"
    >
      <button className="flex items-center space-x-3 sm:space-x-4 bg-black/30 hover:bg-purple-600 text-white px-3 sm:px-4 py-2 sm:py-2 rounded-xl shadow-md transition duration-300 w-full sm:w-60 h-12 sm:h-14 justify-center border-white border-2 mb-2">
        <i className={`${icon} text-lg sm:text-2xl`}></i>
        <span className="text-sm sm:text-lg font-semibold">{title}</span>
      </button>
    </a>
  );
}

export default Buttons;