import Nav from "../components/Nav";
import Pic from "../components/Pic";
import Buttons from "../components/Buttons";

function Home() {
  return (
    <div className="home">
      <Nav />
      <main className="flex flex-col items-center justify-center h-screen text-center">
        <Pic />

        <h1 className="text-6xl font-bold mb-4">Lívia Neves</h1>
        <span className="text-xl ">Full-stack Web Developer Jr.</span>
        <div className="flex items-center mt-8 gap-10">
          <Buttons
            icon="fab fa-github"
            title="GitHub"
            href="https://github.com/liv-inn"
          />
          <Buttons
            icon="fab fa-linkedin"
            title="LinkedIn"
            href="https://www.linkedin.com/in/livia-a-neves/"
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
