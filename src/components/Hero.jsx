// Hero.js
import headshot from "../assets/headshot.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-20 w-full flex gap-12 flex-col lg:flex-row 
                 justify-around items-center lg:justify-between align-center mt-40 
                 mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh] 
                 bg-gray-900 text-gray-100">
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start gap-5 border border-red-400">
        <div>
          <h4 className="text-center lg:text-left text-xl font-bold text-gray-300">
              Hi and welcome to
          </h4>
          <h2 className="text-center lg:text-left text-teal-400 text-3xl font-bold">
            My Portfolio Website
          </h2>
          <p className="text-center lg:text-left text-gray-300">
            I am your friendly neighbourhood software developer...
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end items-center">
        <img 
          src={headshot}
          alt="headshot"
          className="w-80 h-80 object-cover rounded-full"
        />
      </div>
    </section>
  );
}
