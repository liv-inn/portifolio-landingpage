function Pic() {
    return (
        <div className="flex justify-center items-center">
            <div className=" p-1 rounded-full bg-gradient-to-r from-rose-700 via-cyan-300 to-pink-600  animate-gradient border-gradient mb-8">
                <img
                    src="/public/livia.jpg"
                    alt="Lívia Neves"
                    className="rounded-full w-60 h-60 object-cover"
                />
            </div>
        </div>
    );
}

export default Pic;
