import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import Home from './Home'; // Import the Home component

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white py-4 shadow-md z-50">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} className="cursor-pointer">Experience</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Home Section */}
      <Home />

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 pt-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center">About Me</h2>
        <p className="text-gray-600 mt-4 text-center">I am a passionate AI & Data Science student focused on creating solutions through analytics and machine learning.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-6 pt-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Projects</h2>
        {/* Add your projects here */}
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 pt-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Skills</h2>
        <p className="text-gray-600 mt-4 text-center">I have a variety of skills in programming languages, machine learning, and more.</p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-6 pt-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Experience</h2>
        <p className="text-gray-600 mt-4 text-center">Here are some of my experiences as an intern and developer.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 pt-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Contact Me</h2>
        <p className="text-gray-600 mt-4 text-center">Feel free to reach out to me for any inquiries or collaborations!</p>
      </section>
    </div>
  );
};

export default App;
