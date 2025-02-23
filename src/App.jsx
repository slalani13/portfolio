// App.js
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="bg-black text-gray-100 min-h-screen max-h-full flex flex-col justify-around">
      <Navbar />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
