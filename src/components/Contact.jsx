import resume from "../assets/resume.pdf";

export default function Contact() {
    return (
        <section id="contact" className=" max-w-5xl mx-auto p-3 bg-black text-gray-100">
            {/* <h2 className="text-5xl font-bold text-red-500 text-center mb-8">
                Contact
            </h2> */}
            <div className="flex gap-5 justify-center m-2">
                <a 
                   target="_blank"
                   className="text-center hover:underline text-gray-300 hover:text-red-500"
                   href="https://github.com/slalani13">
                    <i className="fa-brands fa-github text-3xl"></i>
                </a>
                <a
                   className="text-center hover:underline text-gray-300 hover:text-red-500"
                   href="https://www.linkedin.com/in/shariq-lalani/"
                   target="_blank">
                   <i className="fa-brands fa-linkedin text-3xl"></i>
                </a>
                <a
                   className="text-center hover:underline text-gray-300 hover:text-red-500"
                   href="mailto:slalani13@gmail.com"
                   target="_blank">
                   <i className="fa-brands fa-google text-3xl"></i>
                </a>
                <a
                    className="text-center hover:underline text-gray-300 hover:text-red-500"
                    href={resume}
                    target="_blank"
                    >
                    <i className="fa-solid fa-file-arrow-down text-3xl"></i> {/* File download icon */}
                </a>
            </div>
        </section>
    );
  }
  