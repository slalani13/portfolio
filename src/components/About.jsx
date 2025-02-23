import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import headshot from "../assets/headshot.jpg";
import Contact from './Contact'; // Adjust path if necessary


export default function About() {
  const [profilePhoto, setProfilePhoto] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    async function fetchUserProfile() {
      const username = 'slalani13';
      const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

      try {
        const response = await fetch(`https://api.github.com/users/${username}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json',
            'X-GitHub-Api-Version': '2022-11-28',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProfilePhoto(data.avatar_url);
          setBio(data.bio);
        } else {
          console.error('Error fetching user data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserProfile();
  }, []);

  return (
    <section
      id="about"
      className="px-10 w-full flex flex-col lg:flex-row pt-20 pb-10 
                 align-center bg-black max-w-5xl mx-auto text-gray-100 mt-10">
      
      {/* Headshot Container (30% width) */}
      <div className="w-full lg:w-1/3 flex justify-center items-center relative mb-8 lg:mb-0">
        
        {/* Pulsing Red Dotted Border */}
        <motion.div
          className="absolute w-72 h-72 border-[6px] border-dotted border-red-500 rounded-full"
          animate={{ scale: [1, 1.1, 1] }} // Smooth pulsing effect
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }} // Slow and natural
        ></motion.div>

        {/* Headshot Image */}
        <motion.img
          src={profilePhoto || headshot} // Default to the local headshot if GitHub profile photo is not available
          alt="About"
          className="w-64 h-64 object-cover rounded-full border-[10px] border-gray-800 shadow-lg"
          whileHover={{ scale: 1.05 }} // Subtle hover effect
          transition={{ type: "spring", stiffness: 120 }}
        />
      </div>

      {/* Text Section (70% width) */}
      <div className="w-full lg:w-2/3 flex flex-col justify-center items-start gap-1 px-6 ">
        <h2 className="text-center text-5xl text-red-500 font-bold mb-8">
          About Me
        </h2>
        
        <p className="text-gray-300 text-center lg:text-left">
          {bio}
        </p>
        
        <p className="text-gray-300 text-center lg:text-left">
          I build scalable backend systems, full-stack apps, and data pipelines. Passionate about crafting solutions that make a real impact.
        </p>
        
        <p className="text-gray-300 text-start lg:text-left">
          Master’s in CS from UPenn. Former grad TA. Experience with Python, Java, JavaScript, C++, Node.js, React, SQL/NoSQL, AWS.
        </p>
        
        <p className="text-gray-300 text-start lg:text-left mb-0">
          Outside work? Badminton, volleyball, and intense board game sessions. Let's connect!
        </p>
        
        {/* <p className="text-gray-300 text-start lg:text-left border border-red-50">
          Check out my resume 
          <a className="font-bold text-red-500 hover:text-red-300 transition-colors" target="_blank" href="https://docs.google.com/document/d/1ZYn0cqV3BXf3Spuj55sDAcgPJ3KdfLYThks8Xl4rrNo/edit?usp=sharing"> here!</a>
        </p> */}
        {/* Adjust spacing to reduce gap between bio and contact */}
        <div className="m-0"> {/* Reduced margin here */}
          <Contact />
        </div>
      </div>

    </section>
  );
}
