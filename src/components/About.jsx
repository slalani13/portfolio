import headshot from "../assets/headshot.jpg";

export default function About() {
  return (
      <section
          id="about"
          className="px-10 w-full flex flex-col lg:flex-row pt-20 pb-10 
                     align-center bg-gray-900 max-w-5xl mx-auto text-gray-100 mt-10">
          <div className="flex-1 flex justify-center items-center">
              <img 
                  src={headshot}  // Placeholder image
                  alt="About"
                  className="w-80 h-80 object-cover rounded-full border border-teal-400"
              />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-5 px-6">
              <div>
                  <h2 className="text-center text-teal-400 text-5xl font-bold">
                      About Me :
                  </h2>
              </div>
              <p className="text-gray-300 text-center lg:text-left">
              Hi there! I'm a software engineer with a passion for building data-driven solutions and software applications. My past experience includes software development, data analytics, and project management. 
              </p>
              <p className="text-gray-300 text-center lg:text-left">
              Most recently, I graduated with a computer science master's degree from the University of Pennsylvania. While completing my degree, I was a software engineering intern at Hrhouz working on an AI-driven analytics service to support employers in the recruiting process and a graduate teaching assistant helping students with software development in Python and Java!
              </p>
              <p className="text-gray-300 text-center lg:text-left">
              Outside of work, I enjoy badminton, volleyball, board games, and karaoke!
              </p>
              <p className="text-gray-300 text-center lg:text-left">
                Feel free to take a look at my resume
                <a className="text-bold text-teal-400" target="_blank" href="https://docs.google.com/document/d/1ZYn0cqV3BXf3Spuj55sDAcgPJ3KdfLYThks8Xl4rrNo/edit?usp=sharing"> here!</a>
              </p>
          </div>
      </section>
  );
}
