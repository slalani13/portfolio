export default function Skills() {
    const frontendSkills = [
      "Angular", "Typescript", "TailwindCSS", "React", "JavaScript", "HTML", "CSS", "FramerMotion"
    ];
  
    const backendSkills = [
      "Java", "Spring Boot", "Python", "Flask", "C", "C++", "SQL", "NoSQL"
    ];
  
    const toolsSkills = [
      "Git", "MySQL", "PostgreSQL", "MongoDB", "Figma", "Terraform", "Docker", "AWS"
    ];
  
    return (
      <section id="techstack" className="px-10 py-0 w-full max-w-5xl mx-auto bg-black text-gray-100 mb-5 mt-10">
        <h2 className="text-center text-5xl text-red-500 font-bold mb-8">Tech Stack</h2>
  
        {/* Tech Stack Categories */}
        <div className="flex flex-col gap-12">
          
          {/* Frontend Skills */}
          <div>
            <h3 className="text-3xl text-red-500 font-semibold mb-4">Frontend</h3>
            <div className="flex gap-8 flex-wrap justify-start">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="text-lg font-bold text-gray-300 hover:text-red-500 transition-all">
                  {skill}
                </div>
              ))}
            </div>
          </div>
  
          {/* Backend Skills */}
          <div>
            <h3 className="text-3xl text-red-500 font-semibold mb-4">Backend</h3>
            <div className="flex gap-8 flex-wrap justify-start">
              {backendSkills.map((skill, index) => (
                <div key={index} className="text-lg font-bold text-gray-300 hover:text-red-500 transition-all">
                  {skill}
                </div>
              ))}
            </div>
          </div>
  
          {/* Tools */}
          <div>
            <h3 className="text-3xl text-red-500 font-semibold mb-4">Tools</h3>
            <div className="flex gap-8 flex-wrap justify-start">
              {toolsSkills.map((skill, index) => (
                <div key={index} className="text-lg font-bold text-gray-300 hover:text-red-500 transition-all">
                  {skill}
                </div>
              ))}
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  