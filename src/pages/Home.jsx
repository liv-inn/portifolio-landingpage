import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import Pic from "../components/Pic";
import Buttons from "../components/Buttons";
import Animation from "../components/Animation";
import CardLanguageTool from "../components/CardLanguageTool";

function Home() {
  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative text-white font-sans">
      <div className="fixed top-1/2 right-4 sm:right-6 -translate-y-1/2 z-50 flex flex-col gap-3">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            aria-label={`Ir para a seção ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === i ? "bg-pink-500 scale-125" : "bg-white/30"
            }`}
            onClick={() =>
              sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" })
            }
          ></button>
        ))}
      </div>

      <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-always w-full">
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          id="home"
          className="h-screen snap-start bg-[url('/bg.jpg')] bg-cover bg-center flex flex-col"
          aria-label="Início"
        >
          <header>
            <Nav />
          </header>

          <main className="flex flex-col items-center justify-center text-center flex-1 px-4">
            <Pic />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              &lt;LiviaNeves /&gt;
            </h1>
            <span className="text-lg md:text-xl">
              Desenvolvedora Web Full Stack
            </span>
            <p className="mt-4 max-w-xl">
              <em>
                Criando interfaces web modernas, acessíveis e responsivas.
              </em>
            </p>

            <nav
              className="flex flex-col sm:flex-row items-center mt-10 sm:mt-20 gap-4 sm:gap-10"
              aria-label="Links sociais"
            >
              <Buttons
                icon="fab fa-github"
                title="Meu GitHub"
                href="https://github.com/liv-inn"
              />
              <Buttons
                icon="fab fa-linkedin"
                title="Meu LinkedIn"
                href="https://www.linkedin.com/in/livia-a-neves/"
              />
            </nav>
          </main>
        </section>

        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          id="about"
          className="h-screen snap-start bg-black flex items-center"
          aria-label="Sobre mim"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 pt-20 md:pt-32 px-4">
            <article className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
                Sobre Mim
              </h2>
              <p className="text-justify">
                Olá! Me chamo Lívia Neves, uma
                <strong className="text-pink-400">
                  {" "}
                  Desenvolvedora Web Full Stack{" "}
                </strong>
                apaixonada, baseada no Brasil. Com experiência tanto em
                tecnologias de front-end quanto de back-end, gosto de criar
                aplicações web bonitas, acessíveis e fáceis de usar.
              </p>

              <p className="my-6 text-justify">
                Atualmente, estou focada em aprimorar minhas habilidades em
                <strong className="text-purple-600"> React, C# e .NET </strong>e
                gosto de explorar novas ferramentas e frameworks que ajudam a
                transformar ideias em realidade. Quando não estou programando,
                você pode me encontrar jogando jogos aconchegantes, assistindo
                anime ou organizando minhas playlists.
              </p>

              <p className="text-justify">
                Estou empolgada com oportunidades de crescimento e colaboração.
              </p>

              <Animation />
            </article>

            <aside className="md:w-1/2 flex justify-center items-center">
              <CardLanguageTool />
            </aside>
          </div>
        </section>

        <footer
          ref={(el) => (sectionRefs.current[2] = el)}
          id="contact"
          className="h-screen snap-start bg-[url('/bg2.jpg')] bg-cover bg-center flex items-center justify-center text-center px-4"
          aria-label="Contato"
        >
          <div className="p-1 rounded-3xl bg-gradient-to-r from-rose-700 via-cyan-300 to-pink-600 animate-gradient">
            <div className="bg-black/90 p-6 md:p-10 rounded-3xl shadow-2xl backdrop-blur-md max-w-xl mx-auto text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Obrigada por chegar até aqui!
              </h2>

              <p className="text-base md:text-lg text-white/90">
                Se você gostou do meu trabalho, que tal me chamar para
                conversar? 💬 <br />
                Estou disponível para oportunidades profissionais, projetos
                freelancer, ou mesmo uma boa troca de ideias sobre tecnologia
                ☕💻
              </p>

              <nav
                className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6 w-full"
                aria-label="Formas de contato"
              >
                <Buttons
                  icon="fab fa-linkedin"
                  title="Meu LinkedIn"
                  href="https://www.linkedin.com/in/livia-a-neves/"
                />
                <Buttons
                  icon="fas fa-envelope"
                  title="E-mail"
                  href="mailto:liviaavelino2002@gmail.com"
                />
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
