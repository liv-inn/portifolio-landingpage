import Nav from "../components/Nav";
import Pic from "../components/Pic";
import Buttons from "../components/Buttons";

function Home() {
  return (
    <div className="home h-full w-full text-white font-sans">
      <section
        className="h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex flex-col"
      >
        <Nav />
        <main className="flex flex-col items-center justify-center text-center flex-1">
          <Pic />

<h1 className="text-4xl font-bold text-white mb-4">
  &lt;LiviaNeves /&gt;
</h1>          <span className="text-xl">Full-stack Web Developer Jr.</span>
          <p className="mt-4">
            <em>
              Building responsive, accessible, and modern web interfaces.
            </em>
          </p>
          <div className="flex flex-col sm:flex-row items-center mt-20 sm:gap-10">
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
      </section>

      <section className="bg-black text-white py-20 ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          <section className="md:w-1/2 bg-black/40 rounded-lg backdrop-blur-sm p-8">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p>
              Hi! I'm Lívia Neves, a passionate
              <strong> Junior Full Stack Web Developer </strong> based in Brazil.
              With a background in both front-end and back-end technologies, I
              love creating beautiful, accessible, and user-friendly web
              applications.
            </p>
            <p className="my-6">
              I'm currently focused on improving my skills in React, C# and
              .NET and I enjoy learning new tools and frameworks that help bring
              ideas to life. When I'm not coding, you can find me playing cozy
              games, watching anime, or organizing my playlists.
            </p>
            <p>I'm excited about opportunities to grow and collaborate ✨</p>
          </section>

          <section className="md:w-1/2">
          </section>
        </div>
      </section>

      <section
        className="h-screen bg-[url('/bg2.jpg')] bg-cover bg-center flex items-center justify-center text-center"
      >
        <h2 className="text-4xl font-bold bg-black/50 p-6 rounded-xl">
        <p>Ultima parte</p>
        </h2>
      </section>
    </div>
  );
}

export default Home;
