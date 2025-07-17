import {
  Code,
  FileText,
  Palette,
  Coffee,
  Github,
  Container,
  Send,
  Database,
  Figma,
  Cpu,
  GitBranch,
  Layers,
  Settings,
  Terminal,
  Braces,
} from "lucide-react";

function CardLanguageTool() {
  const tools = [
    {
      icon: <FileText className="text-orange-500" size={32} />,
      label: "HTML5",
    },
    { icon: <Palette className="text-blue-500" size={32} />, label: "CSS3" },
    {
      icon: <Braces className="text-yellow-400" size={32} />,
      label: "JavaScript",
    },
    { icon: <Code className="text-blue-400" size={32} />, label: "React" },
    { icon: <Github size={32} />, label: "GitHub" },
    {
      icon: <Container className="text-blue-400" size={32} />,
      label: "Docker",
    },
    { icon: <Send className="text-orange-500" size={32} />, label: "Postman" },
    { icon: <Coffee className="text-red-500" size={32} />, label: "Java" },
    {
      icon: <Layers className="text-green-500" size={32} />,
      label: "Spring Boot",
    },
    { icon: <Terminal className="text-purple-500" size={32} />, label: "C#" },
    { icon: <Settings className="text-purple-500" size={32} />, label: ".NET" },
    {
      icon: <Database className="text-blue-400" size={32} />,
      label: "PostgreSQL",
    },
    { icon: <Figma className="text-purple-400" size={32} />, label: "Figma" },
    { icon: <Cpu className="text-cyan-400" size={32} />, label: "Tailwind" },
    { icon: <GitBranch className="text-orange-500" size={32} />, label: "Git" },
  ];

  return (
    <div className="text-white max-w-6xl mx-auto  ">
      <h3 className="text-3xl font-bold mb-12 text-white text-center">
        Linguagens & Ferramentas
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
        {tools.map((item, index) => (
          <div key={index} className="group relative">
            <div className="flex flex-col items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 transition-all duration-500 hover:scale-110 hover:rotate-3 hover:bg-gray-800/60 hover:border-pink-500/30 hover:shadow-2xl hover:shadow-pink-500/20 h-24 ">
              <div className="mb-4 transform transition-all duration-300 group-hover:scale-125 group-hover:text-pink-400">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                {item.label}
              </span>
            </div>

            {/* Efeito de brilho no hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardLanguageTool;
