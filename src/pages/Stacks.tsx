export const Stacks = () => {
  const skills = [
    { name: "HTML5", icon: "devicon-html5-plain", color: "hover:text-orange-500" },
    { name: "CSS3", icon: "devicon-css3-plain", color: "hover:text-blue-400" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain", color: "hover:text-violet-600" },
    { name: "React", icon: "devicon-react-original", color: "hover:text-cyan-400" },
    { name: "JavaScript", icon: "devicon-javascript-plain", color: "hover:text-yellow-400" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "hover:text-white" },
    { name: "GitHub", icon: "devicon-github-original", color: "hover:text-violet-800" },
    { name: "Java", icon: "devicon-java-plain", color: "hover:text-red-600" },
    { name: "Spring", icon: "devicon-spring-plain", color: "hover:text-lime-500" },
    { name: "Git", icon: "devicon-git-plain", color: "hover:text-orange-700" }
  ];

  return (
    <section
      id="stacks"
      className="w-full px-6 py-12 min-h-[70vh] bg-gradient-to-r from-slate-900 to-gray-800 flex flex-col items-center"
    >
      <h2 className="text-4xl text-white font-bold text-center mb-10">Stacks</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-20">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg 
                       hover:scale-105 transition-all duration-300 border border-transparent
                       hover:border-cyan-400 hover:shadow-[0_0_15px_3px_rgba(6,182,212,0.8)]"
          >
            <i
              className={`${skill.icon} text-[3rem] text-blue-500 ${skill.color} transition-colors duration-300`}
            ></i>
            <p className="text-white mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};