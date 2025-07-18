function Pic() {
  return (
    <div className="flex justify-center items-center">
      <div className="p-1 rounded-full bg-gradient-to-r from-rose-700 via-cyan-300 to-pink-600 animate-gradient border-gradient mb-6 sm:mb-8">
        <img
          src={`${import.meta.env.BASE_URL}livia.jpg`}
          alt="Lívia Neves"
          className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 object-cover"
        />
      </div>
    </div>
  );
}

export default Pic;