const Navbar = () => {
    return (
      <nav className="w-full px-5 sm:px-10 py-4 shadow-xl 
                      backdrop-blur-md fixed top-0 z-10 bg-black/50">
        <div className="container flex flex-col lg:flex-row
                        gap-5 justify-between w-full 
                        items-center max-w-5xl mx-auto">
          <h3 className="text-3xl text-red-500 font-extrabold tracking-wide">
            Shariq's Portfolio
          </h3>
          <ul className="flex gap-3 align-center p-1 flex-wrap">
            {["About", "Tech Stack", "Projects", "Contact"].map((item, index) => (
              <li key={index}>
                <a className="text-sm sm:text-base px-3 lg:px-6 py-2 
                              transition-all duration-300 rounded-lg 
                              text-gray-300 hover:text-gray-100 
                              hover:bg-red-600 hover:shadow-lg"
                              href={item === "Contact" ? "#about" : `#${item.toLowerCase().replace(" ", "")}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  