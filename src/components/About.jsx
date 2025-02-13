import {useState, useEffect} from "react"
import headshot from "../assets/headshot.jpg";

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
              'Authorization': `Bearer ${GITHUB_TOKEN}`,  // Optional, if using authentication
              'Accept': 'application/vnd.github.v3+json',
              'X-GitHub-Api-Version': '2022-11-28',
            },
          });
  
          if (response.ok) {
            const data = await response.json();
            setProfilePhoto(data.avatar_url); // Profile photo URL
            setBio(data.bio); // User's bio
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
                     align-center bg-gray-900 max-w-5xl mx-auto text-gray-100 mt-10">
          <div className="flex-1 flex justify-center items-center">
              <img 
                  src={headshot}  // {headshot}
                  alt="About"
                  className="w-80 h-80 object-cover rounded-full border border-teal-400"
              />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-5 px-6">
              <div>
                  <h2 className="text-center text-teal-400 text-5xl font-bold">
                      About Me
                  </h2>
              </div>
              <p className="text-gray-300 text-center lg:text-left">
                {bio}
              </p>
              <p className="text-gray-300 text-center lg:text-left">
              From building resilient backend systems to creating seamless full-stack applications and advanced data pipelines, I’m passionate about crafting technology that moves the needle. Recently, I developed an AI-driven analytics framework at HrHouz, revolutionizing candidate reference checks by transforming raw data into actionable insights for faster hiring decisions. Imagine cutting down hours of analysis with a few clicks—that’s the impact I aim for!

              </p>
              <p className="text-gray-300 text-center lg:text-left">
              With a robust toolkit (Python, Flask, Java, JavaScript, C/C++, Node.js, React, SQL/NoSQL, AWS) and hands-on experience in software systems and analytics, I’m well-versed in designing solutions that deliver. While earning my master’s in Computer Science from the University of Pennsylvania, I also served as a graduate TA for Intro to Software Development, honing my ability to simplify complex concepts and mentor budding engineers.
              </p>
              <p className="text-gray-300 text-center lg:text-left">
              Outside of work, I’m just as competitive, whether it’s on the badminton court, in volleyball matches, or over epic board games with friends. If you’re ready to talk code, strategy, or maybe just exchange game tactics, reach out— I'd love to connect!
              </p>
              <p className="text-gray-300 text-center lg:text-left">
                Feel free to take a look at my resume
                <a className="text-bold text-teal-400" target="_blank" href="https://docs.google.com/document/d/1ZYn0cqV3BXf3Spuj55sDAcgPJ3KdfLYThks8Xl4rrNo/edit?usp=sharing"> here!</a>
              </p>
          </div>
      </section>
  );
}
