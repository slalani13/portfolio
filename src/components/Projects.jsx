import {useState, useEffect} from "react"
import ideal from "../assets/ideal neighborhood.jpg"
import picture1 from "../assets/Picture1.jpg"
import hrhouz from "../assets/hrhouz.png"

export default function Projects() {
  return (
    <section id="projects" className="w-full flex flex-col gap-5 max-w-5xl mx-auto mb-10 mt-10">
      <h2 className="text-center text-5xl text-red-500 font-bold mb-8">
        Projects
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "AI-driven Reference Check Analytics",
            imgSrc: hrhouz,
            link: "https://www.hrhouz.com/reference-checks",
            description:
              "Developed AI-driven automated reference-checking software to analyze candidate data and provide hiring insights.",
            tech: "Python, Flask, Terraform, Docker, AWS",
          },
          {
            title: "Neighborhood Livability Application",
            imgSrc: ideal,
            link: "https://github.com/Stephman1/liveability-app",
            description:
              "An app that evaluates neighborhoods based on air quality, life expectancy, and walkability metrics.",
            tech: "React, JavaScript, Node.js, MySQL, AWS RDS",
          },
          {
            title: "Yelp Star Ratings Prediction",
            imgSrc: picture1,
            link: "https://github.com/slalani13/Yelp-Ratings-Prediction-Project",
            description:
              "Used data-driven insights to analyze customer behavior, predict ratings, and improve business strategies.",
            tech: "Python, Pandas, scikit-learn, Seaborn, Tableau",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="p-5 bg-black rounded-lg shadow-lg transition hover:shadow-2xl hover:scale-[102%] border border-gray-700"
          >
            <a target="_blank" href={project.link} className="block">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </a>
            <h3 className="text-xl font-bold text-white mt-3 text-center">
              <a target="_blank" href={project.link} className="hover:underline text-gray-300">
                {project.title}
              </a>
            </h3>
            <p className="text-gray-400 text-sm mt-2">{project.description}</p>
            <p className="text-gray-500 text-xs mt-2">
              <strong>Technologies:</strong> {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
