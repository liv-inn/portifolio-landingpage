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
      {/* Navegação por pontos - Responsiva */}
      <div className="fixed top-1/2 right-2 sm:right-4 md:right-6 -translate-y-1/2 z-50 flex flex-col gap-2 sm:gap-3">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            aria-label={`Ir para a seção ${i + 1}`}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
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

          <main className="flex flex-col items-center justify-center text-center flex-1 px-4 sm:px-6 md:px-8">
            <Pic />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              &lt;LiviaNeves /&gt;
            </h1>
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4">
              Desenvolvedora Web Full Stack
            </span>
            <p className="mt-2 sm:mt-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-sm sm:text-base md:text-lg px-4">
              <em>
                Criando interfaces web modernas, acessíveis e responsivas.
              </em>
            </p>

            <nav
              className="flex flex-col sm:flex-row items-center mt-6 sm:mt-10 md:mt-16 lg:mt-20 gap-3 sm:gap-4 md:gap-6 lg:gap-10 w-full sm:w-auto px-4 sm:px-0"
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
          className="min-h-screen snap-start bg-black flex items-center py-8 sm:py-16 md:py-20"
          aria-label="Sobre mim"
        >
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 pt-8 sm:pt-16 md:pt-20 lg:pt-32 px-4 sm:px-6 md:px-8">
            <article className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
                Sobre Mim
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-justify mb-4 sm:mb-6 leading-relaxed">
                Olá! Me chamo Lívia Neves, uma
                <strong className="text-pink-400">
                  {" "}
                  Desenvolvedora Web Full Stack{" "}
                </strong>
                apaixonada, localizada no Brasil. Com experiência tanto em
                tecnologias de front-end quanto de back-end, gosto de criar
                aplicações web bonitas, acessíveis e fáceis de usar.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-justify mb-4 sm:mb-6 leading-relaxed">
                Atualmente, estou focada em aprimorar minhas habilidades em
                <strong className="text-purple-600"> React, C# e .NET </strong>e
                gosto de explorar novas ferramentas e frameworks que ajudam a
                transformar ideias em realidade. Quando não estou programando,
                você pode me encontrar jogando jogos aconchegantes, assistindo
                anime ou organizando minhas playlists.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-justify mb-4 sm:mb-6 leading-relaxed">
                Estou empolgada com oportunidades de crescimento e colaboração.
              </p>

              <div className="mt-4 sm:mt-6 md:mt-8">
                <Animation />
              </div>
            </article>

            <aside className="lg:w-1/2 flex justify-center order-1 lg:order-2">
              <CardLanguageTool />
            </aside>
          </div>
        </section>

        <footer
          ref={(el) => (sectionRefs.current[2] = el)}
          id="contact"
          className="min-h-screen snap-start bg-[url('/bg2.jpg')] bg-cover bg-center flex items-center justify-center text-center px-4 sm:px-6 md:px-8 py-8 sm:py-16"
          aria-label="Contato"
        >
          <div className="p-0.5 sm:p-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-rose-700 via-cyan-300 to-pink-600 animate-gradient w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <div className="bg-black/90 p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-md mx-auto text-white text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">
                Obrigada por chegar até aqui!
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 leading-relaxed">
                Se você gostou do meu trabalho, que tal me chamar para
                conversar? 💬 <br className="hidden sm:block" />
                Estou disponível para oportunidades profissionais, projetos
                freelancer, ou mesmo uma boa troca de ideias sobre tecnologia
                ☕💻
              </p>

              <nav
                className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 w-full"
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