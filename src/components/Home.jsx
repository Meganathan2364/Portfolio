import React, { useEffect, useState } from 'react';
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white px-4 py-10 sm:px-6 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-16 z-10 relative">
        
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Hello, I'm Meganathan V
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            AI & Data Science Student
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed">
            I'm passionate about applying artificial intelligence to solve real-world problems.
            Currently pursuing my B.Tech in AI & Data Science, I enjoy working on projects involving 
            healthcare, carbon neutrality, and intelligent automation.
          </p>

          {/* Contact Info */}
          <div className="text-gray-700 text-sm sm:text-base space-y-1 pt-2">
            <p className="flex items-center gap-2"><FaEnvelope className="text-blue-600" /> vmega0777@gmail.com</p>
            <p className="flex items-center gap-2"><FaPhone className="text-blue-600" /> +91 8072593510</p>
            <p className="flex items-center gap-2">
              <FaLinkedin className="text-blue-600" />
              <a href="https://www.linkedin.com/in/meganathan-v-b28a5b25a" target="_blank" rel="noreferrer" className="hover:underline text-blue-700">
                linkedin.com/in/meganathan-v-b28a5b25a
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaGithub className="text-blue-600" />
              <a href="https://github.com/Meganathan2364" target="_blank" rel="noreferrer" className="hover:underline text-blue-700">
                github.com/Meganathan2364
              </a>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Link
              to="/Contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Link>
            <a
              href="/Meganathan_V_Resume (6).pdf"
              download
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded-lg flex items-center gap-2 transition-all duration-300"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </div>

        {/* Right Section - Profile Pic */}
        <div className="flex-1 flex justify-center md:justify-end animate-fade-in">
          <img
            src={profileImage}
            alt="Meganathan V"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-lg transition-transform duration-500"
          />
        </div>
      </div>

      {/* Mouse Particle Effect */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 123, 255, 0.05), transparent 70%)`,
        }}
      ></div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Home;
