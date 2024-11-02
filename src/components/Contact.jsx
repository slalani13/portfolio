// Contact.js
export default function Contact() {
  return (
      <section id="contact"
               className="my-10align-center max-w-5xl mx-auto p-3 bg-gray-900 text-gray-100">
          <h2 className="text-5xl font-bold text-teal-400 text-center">
              Contact
          </h2>
          <div className="flex gap-5 justify-center my-10">
              <a 
                 target="_blank"
                 className="text-center hover:underline text-gray-300 hover:text-teal-400"
                 href="https://github.com/slalani13">
                  <i className="fa-brands fa-github text-3xl"></i>
              </a>
              <a
                 className="text-center hover:underline text-gray-300 hover:text-teal-400"
                 href="https://www.linkedin.com/in/shariq-lalani/"
                 target="_blank">
                 <i className="fa-brands fa-linkedin text-3xl"></i>
              </a>
              <a
                 className="text-center hover:underline text-gray-300 hover:text-teal-400"
                 href="mailto:slalani13@gmail.com"
                 target="_blank">
                 <i className="fa-brands fa-google text-3xl"></i>
              </a>
          </div>
      </section>
  );
}
