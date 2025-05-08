import React, { useState } from "react";
import stock from '../assets/carbon_neutrality.jpeg';
import diseaseAdvisor from '../assets/Medi_Advisor.jpg';
import accidentAssistant from '../assets/ai accident.jpg';
import Footer from './Footer';

// Modal for project details
const ProjectModal = ({ project, closeModal }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-full sm:max-w-3xl w-full">
      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
      <p><strong>Overview:</strong> {project.details.overview}</p>
      <p><strong>Problem Statement:</strong> {project.details.problemStatement}</p>
      <p><strong>Solution:</strong> {project.details.solution}</p>
      <p><strong>Role:</strong> {project.details.role}</p>
      <p><strong>Key Features:</strong> {project.details.keyFeatures.join(', ')}</p>
      <p><strong>GitHub Link:</strong> <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600">{project.github}</a></p>
      <button
        onClick={closeModal}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300"
      >
        Close
      </button>
    </div>
  </div>
);

const ProjectCard = ({ image, title, description, technologies, onClick }) => (
  <div className="flex flex-col bg-gray-900 border border-neutral-700 rounded-lg shadow-lg w-full max-w-xs transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl cursor-pointer">
    <img className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-105" src={image} alt={title} />
    <div className="p-4">
      <h5 className="text-lg font-bold tracking-tight text-white">{title}</h5>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
    <div className="flex justify-between items-center px-4 pb-4">
      <div className="flex flex-wrap gap-2">
        {technologies.map((tag, index) => (
          <span key={index} className="text-sm text-blue-500">#{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      title: 'Carbon Neutrality Project',
      description: 'A machine learning-based system for analyzing shop invoice data and providing actionable insights for future stock suggestions.',
      image: stock,
      technologies: ['Python', 'Machine Learning', 'Data Analysis'],
      github: 'https://github.com/Meganathan2364',
      details: {
        overview: 'This project develops a machine learning model to quantify carbon emissions and provide actionable insights for reducing the carbon footprint in Indian coal mines.',
        problemStatement: 'India’s coal mining sector contributes significantly to carbon emissions, and there is a need for data-driven solutions to mitigate these emissions.',
        solution: 'The model uses emissions data to provide strategies for carbon neutrality through improved energy management, sustainable mining practices, and carbon offsetting.',
        role: 'I was responsible for data collection, preprocessing, and model development. I also provided recommendations on reducing emissions and optimizing the carbon neutrality pathway.',
        keyFeatures: ['Emissions analysis', 'Carbon neutrality strategies', 'Data-driven recommendations'],
      }
    },
    {
      title: 'Disease Advisory and Hospital Recommendation System',
      description: 'A Flask-based healthcare system recommending hospitals and advising on actions based on user-input symptoms and severity.',
      image: diseaseAdvisor,
      technologies: ['Python', 'Flask', 'Machine Learning', 'Pandas'],
      github: 'https://github.com/Meganathan2364/medi-project',
      details: {
        overview: 'A healthcare advisory system that assesses symptoms and recommends actions, including hospital visits based on symptom severity.',
        problemStatement: 'Patients often face difficulties in determining the right course of action based on their symptoms, leading to unnecessary hospital visits or delayed care.',
        solution: 'The system uses symptom severity to recommend immediate actions and hospital recommendations based on proximity and treatment options.',
        role: 'I was responsible for data collection, preprocessing, and model development',
        keyFeatures: ['Symptom severity assessment', 'Hospital recommendations', 'Real-time advice system'],
      }
    },
    {
      title: 'AI-Powered Accident Assistance',
      description: 'An AI-based app for managing road accident situations, providing emergency notifications, and real-time ambulance tracking.',
      image: accidentAssistant,
      technologies: ['Python', 'AI', 'Machine Learning', 'IoT'],
      github: 'https://github.com/Meganathan2364',
      details: {
        overview: 'An AI-powered app designed to assist in road accidents by analyzing injury severity, notifying emergency responders, and tracking ambulance location in real-time.',
        problemStatement: 'In road accidents, timely help is often delayed due to inefficient communication between involved parties and emergency responders.',
        solution: 'The app assesses injury severity using AI, notifies police and ambulances, and tracks their locations. It also sends real-time updates to the victim’s family.',
        role: 'I developed machine learning models for injury severity analysis.',
        keyFeatures: [ 'Automated emergency alerts', 'AI-based injury assessment'],
      }
    }
  ];

  const handleProjectClick = (index) => {
    setSelectedProject(projectData[index]);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black justify-center items-center">
      {/* Centered Heading */}
      <div className="text-center mt-10 text-white text-3xl font-bold">
        <h1 style={{ margin: '2px' }}>My Projects</h1>
      </div>

      {/* Project Cards in a Row */}
      <div className="flex flex-wrap justify-center gap-8 px-6 py-8 w-full max-w-7xl mx-auto">
        {projectData.map((item, index) => (
          <div key={index} className="flex justify-center flex-col items-center">
            <ProjectCard
              image={item.image}
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              onClick={() => handleProjectClick(index)} // Show modal on card click
            />
            <div className="text-center mt-4">
              <button
                onClick={() => handleProjectClick(index)} // Show modal on button click
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying project details */}
      {selectedProject && <ProjectModal project={selectedProject} closeModal={closeModal} />}

      {/* Footer stays at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default Projects;
