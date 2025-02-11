import {useState, useEffect} from "react"
import ideal from "../assets/ideal neighborhood.jpg"
import picture1 from "../assets/Picture1.jpg"
import hrhouz from "../assets/hrhouz.png"

// Projects.js
export default function Projects() {
  const [repoLinkLivability, setRepoLinkLivability] = useState("");
  const [repoLinkYelp, setRepoLinkYelp] = useState("");

  useEffect(() => {
    // Fetch the repository data for 'liveability-app'
    fetch("https://api.github.com/repos/Stephman1/liveability-app")
      .then((response) => response.json())
      .then((data) => {
        console.log("Livability repo data:", data);
        setRepoLinkLivability(data.html_url); // Extract the repo URL for Livability App
      })
      .catch((error) => console.error("Error fetching repo data for Livability App:", error));

    // Fetch the repository data for 'Yelp-Ratings-Prediction-Project'
    fetch("https://api.github.com/repos/slalani13/Yelp-Ratings-Prediction-Project")
      .then((response) => response.json())
      .then((data) => {
        console.log("Yelp repo data:", data);
        setRepoLinkYelp(data.html_url); // Extract the repo URL for Yelp Project
      })
      .catch((error) => console.error("Error fetching repo data for Yelp Project:", error));
  }, []);

  return (
      <section id="projects"
               className="w-full flex flex-col gap-5 align-center max-w-5xl mx-auto mb-10 overflow-x-hidden">
          <h2 className="text-5xl text-teal-400 font-bold text-center">
              Projects
          </h2>

          <div className="p-10 bg-gray-800 flex flex-col justify-around items-start
                          gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                          hover:shadow-xl hover:scale-[102%] w-full md:items-center">
              <div className="w-80 rounded flex justify-center">
                  <a target="_blank" href="https://www.hrhouz.com/reference-checks"
                      className="w-full h-full">
                      <img src={hrhouz}
                           alt="Project 1"
                           className="w-full h-64 
                                      bg-cover rounded"/>
                  </a>
              </div>
              <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1 text-gray-100">
                  <h2 className="font-bold text-3xl text-center">
                      <a className="hover:underline text-teal-400 " target="_blank"
                          href="https://www.hrhouz.com/reference-checks">
                          AI-driven Reference Check Analytics
                      </a>
                  </h2>
                  <p>
                  At Hrhouz, I developed an AI-driven automated reference-checking software to analyze candidate data and deliver actionable insights and summaries for better hiring decisions. I automated deployment infrastructure and built an analytics API to convert text data into measurable performance metrics, enabling comprehensive candidate evaluations.
                  </p>
                  <p>
                  Technologies: Python, Flask, Terraform, Docker, AWS 
                  </p>
              </div>
          </div>

          <div className="p-10 bg-gray-800 flex flex-col justify-around items-start
                          gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                          hover:shadow-xl hover:scale-[102%] w-full md:items-center">
              <div className="w-80 rounded flex justify-center">
                  <a target="_blank" href={repoLinkLivability || "#"}
                      className="w-full h-full">
                      <img src={ideal}
                           alt="Project 1"
                           className="w-full h-64 
                                      bg-cover rounded"/>
                  </a>
              </div>
              <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1 text-gray-100">
                  <h2 className="font-bold text-3xl text-center">
                      <a className="hover:underline text-teal-400 " target="_blank"
                          href={repoLinkLivability || "#"}>
                          Neigborhood Livability Application
                      </a>
                  </h2>
                  <p>
                  The Livability App consolidates essential neighborhood data to support informed relocation decisions based on more than just housing costs. By comparing metrics like air quality, life expectancy, walkability, and rent across regions, our app provides a central resource for users to evaluate neighborhoods holistically. With a comprehensive analysis of livability factors, we help users find areas that best match their lifestyle and preferences.
                  </p>
                  <p>
                  Technologies: React, Javascript, Node.js, MySQL, AWS RDS
                  </p>
              </div>
          </div>


          <div className="p-10 bg-gray-800 flex flex-col justify-around items-start
                          gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                          hover:shadow-xl hover:scale-[102%] w-full md:items-center">
              <div className="w-80 rounded">
                  <a target="_blank" href={repoLinkYelp || "#"}
                      className="w-full h-full">
                      <img src={picture1}
                           alt="Project 1"
                           className="w-full h-64 
                                      bg-cover rounded"/>
                  </a>
              </div>
              <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1 text-gray-100">
                  <h2 className="font-bold text-3xl text-center">
                      <a target="_blank" className="hover:underline text-teal-400"
                          href={repoLinkYelp || "#"}>
                          Yelp Star Ratings Prediction
                      </a>
                  </h2>
                  <p>
                  This project aims to improve Customer Experience and Business Performance on Yelp through data-driven insights. By analyzing customer reviews, profiles, and business data, I identified key factors influencing customer impressions, predicted ratings, and offered strategies for businesses to address trends in customer behavior.
                  </p>
                  <p>
                  Technologies: Python (Pandas, scikit-learnm matplotlib), Tableau, Seaborn
                  </p>
              </div>
          </div>

      </section>
  );
}
