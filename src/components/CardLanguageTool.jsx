import { 
  FileText, 
  Palette, 
  Braces, 
  Code, 
  Github, 
  Container, 
  Send, 
  Coffee, 
  Layers, 
  Terminal, 
  Settings, 
  Database, 
  Figma, 
  Cpu, 
  GitBranch 
} from "lucide-react";

function CardLanguageTool() {
  const tools = [
    {
      icon: <FileText className="text-orange-500" size={24} />,
      label: "HTML5",
    },
    { icon: <Palette className="text-blue-500" size={24} />, label: "CSS3" },
    {
      icon: <Braces className="text-yellow-400" size={24} />,
      label: "JavaScript",
    },
    { icon: <Code className="text-blue-400" size={24} />, label: "React" },
    { icon: <Github size={24} />, label: "GitHub" },
    {
      icon: <Container className="text-blue-400" size={24} />,
      label: "Docker",
    },
    { icon: <Send className="text-orange-500" size={24} />, label: "Postman" },
    { icon: <Coffee className="text-red-500" size={24} />, label: "Java" },
    {
      icon: <Layers className="text-green-500" size={24} />,
      label: "Spring Boot",
    },
    { icon: <Terminal className="text-purple-500" size={24} />, label: "C#" },
    { icon: <Settings className="text-purple-500" size={24} />, label: ".NET" },
    {
      icon: <Database className="text-blue-400" size={24} />,
      label: "PostgreSQL",
    },
    { icon: <Figma className="text-purple-400" size={24} />, label: "Figma" },
    { icon: <Cpu className="text-cyan-400" size={24} />, label: "Tailwind" },
    { icon: <GitBranch className="text-orange-500" size={24} />, label: "Git" },
  ];

  return (
    <div className="text-white max-w-6xl mx-auto px-4">
      <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-white text-center">
        Linguagens & Ferramentas
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {tools.map((item, index) => (
          <div key={index} className="group relative">
            <div className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-800/50 transition-all duration-500 hover:scale-110 hover:rotate-3 hover:bg-gray-800/60 hover:border-pink-500/30 hover:shadow-2xl hover:shadow-pink-500/20 h-16 sm:h-20 md:h-24">
              <div className="mb-2 sm:mb-3 md:mb-4 transform transition-all duration-300 group-hover:scale-125 group-hover:text-pink-400">
                {item.icon}
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                {item.label}
              </span>
            </div>

            <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardLanguageTool;