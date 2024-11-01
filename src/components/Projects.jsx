import ideal from "../assets/ideal neighborhood.jpg"
import picture1 from "../assets/Picture1.jpg"

// Projects.js
export default function Projects() {
  return (
      <section id="projects"
               className="w-full flex flex-col gap-5 align-center max-w-5xl mx-auto mb-10">
          <h2 className="text-5xl text-teal-400 font-bold text-center">
              My Projects
          </h2>
          <div className="p-10 bg-gray-800 flex flex-col justify-around items-center
                          gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                          hover:shadow-xl hover:scale-[102%] w-full">
              <div className="w-80 rounded">
                  <a href="https://github.com/Stephman1/liveability-app"
                      className="w-full h-full">
                      <img src={ideal}
                           alt="Project 1"
                           className="w-full h-full 
                                      bg-cover rounded"/>
                  </a>
              </div>
              <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1 text-gray-100">
                  <h2 className="font-bold text-3xl text-center">
                      <a className="hover:underline text-teal-400 "
                          href="https://github.com/Stephman1/liveability-app">
                          Neigborhood Livability Application
                      </a>
                  </h2>
                  <p>
                  The Livability App is designed to address the need for comprehensive information regarding the livability of different neighborhoods so users can make an informed decision during relocation utilizing metrics beyond just housing cost. Factors such as air quality, life expectancy, walkability, and rent make a significant impact on quality of life. Information across different areas and regions is often fragmented and difficult to compare. By providing a comprehensive comparative analysis of neighborhoods, we aspire to help users find an ideal neighborhood based on their lifestyle and preferences. Utilizing data on these key livability metrics, our app seeks to create a central space for users to gather all the data they need to make an informed decision on where they want to live.
                  </p>
                  <p>
                  Technologies: React, Javascript, Node.js, MySQL, AWS RDS
                  </p>
              </div>
          </div>


          <div className="p-10 bg-gray-800 flex flex-col justify-around items-center
                          gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                          hover:shadow-xl hover:scale-[102%] w-full">
              <div className="w-80 rounded">
                  <a href="https://github.com/slalani13/Yelp-Ratings-Prediction-Project"
                      className="w-full h-full">
                      <img src={picture1}
                           alt="Project 1"
                           className="w-full h-full 
                                      bg-cover rounded"/>
                  </a>
              </div>
              <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1 text-gray-100">
                  <h2 className="font-bold text-3xl text-center">
                      <a className="hover:underline text-teal-400"
                          href="https://github.com/slalani13/Yelp-Ratings-Prediction-Project">
                          Yelp Star Ratings Prediction
                      </a>
                  </h2>
                  <p>
                  The objective of this project is to enhance Customer Experience and Business Performance through Data-Driven Insights for the participating businesses on Yelp. Utilizing the data on customer reviews, customer profiles, and business profiles, I determined key features in the business profile/customer profile that influence a customer’s impression of a business, endeavored to estimate a customer's rating based on a business, and provided ways for businesses to address identifiable trends in customer rating behaviors.
                  </p>
                  <p>
                  Technologies: Python (Pandas, scikit-learnm matplotlib), Tableau, Seaborn
                  </p>
              </div>
          </div>

      </section>
  );
}
