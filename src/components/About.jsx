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
              I'm an engineer with a passion for building data-driven solutions and full-stack applications.
              </p>
              <p className="text-gray-300 text-center lg:text-left">
              With experience in technologies like Python, JavaScript, Flask, Node.js, React, AWS, Tableau, and Excel, I love tackling complex challenges and optimizing workflows.
              </p>
              <p className="text-gray-300 text-center lg:text-left">
              Outside of coding, I enjoy badminton, volleyball, and training for a triathlon!
              </p>
          </div>
      </section>
  );
}
