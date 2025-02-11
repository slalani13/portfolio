export default function Skills() {
  const skills = [
    "Python", "HTML", "CSS", "JavaScript", "React",
    "C/C++", "Java", "SQL", "NoSQL", "Terraform", "Docker", "Spring Boot"
  ];
  
  return (
      <section id="skills" className="px-10 py-10 w-full max-w-5xl mx-auto bg-gray-900 text-gray-100 mb-5 mt-0">
          <h2 className="text-center text-5xl text-teal-400 font-bold">
              Tech Stack
          </h2>
          <div className="mt-10 flex gap-4 justify-center flex-wrap mx-auto max-w-xl">
              {skills.map((skill, index) => {
                  return (
                      <div key={index}
                           className="cursor-pointer w-28 h-20 // Adjusted width for 6 blocks 
                                      rounded bg-gray-800 text-lg 
                                      flex items-center justify-center 
                                      font-bold text-teal-400 hover:shadow-xl 
                                      transition-all duration-300 hover:bg-teal-600">
                          {skill}
                      </div>
                  );
              })}
          </div>
      </section>
  );
}
