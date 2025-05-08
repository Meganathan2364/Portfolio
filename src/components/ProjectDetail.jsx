import React from "react";
import { useParams } from "react-router-dom";
import { FaTools, FaGithub, FaListUl } from "react-icons/fa";
import { MdOutlineAssignment, MdOutlineInfo } from "react-icons/md";
import { motion } from "framer-motion";

// Dummy Project Data
const projectDetails = {
  'stock-suggestor': {
    title: 'Stock Suggestor',
    description: 'AI tool to predict product demand based on shop invoice data. The model analyzes historical data and helps businesses plan their inventory effectively.',
    role: 'I was responsible for data preprocessing, feature engineering, and building the machine learning model to predict stock requirements.',
    keyFeatures: [
      'Predicts product demand',
      'Analyzes historical data',
      'Helps with inventory management'
    ],
    technologies: ['Python', 'Machine Learning', 'Pandas', 'Sklearn'],
    github: 'https://github.com/Meganathan2364'
  },
  'disease-advisory': {
    title: 'Disease Advisory System',
    description: 'A healthcare system that provides medical advice based on symptoms. It assesses severity and suggests hospitals or medical actions.',
    role: 'I developed the backend using Flask, integrated machine learning models for severity prediction, and worked on integrating hospital recommendation algorithms.',
    keyFeatures: [
      'Symptom-based advisory',
      'Severity level prediction',
      'Hospital recommendations'
    ],
    technologies: ['Python', 'Flask', 'Pandas', 'Machine Learning'],
    github: 'https://github.com/Meganathan2364'
  },
  'accident-assistance': {
    title: 'AI-Powered Accident Assistant',
    description: 'An AI-powered application that sends emergency notifications and provides real-time ambulance tracking during road accidents.',
    role: 'I was in charge of implementing the real-time location tracking, integrating emergency notifications, and AI-powered injury severity assessment.',
    keyFeatures: [
      'Real-time ambulance tracking',
      'Emergency notifications',
      'AI-powered injury severity prediction'
    ],
    technologies: ['Python', 'AI', 'Machine Learning', 'IoT'],
    github: 'https://github.com/Meganathan2364'
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center text-white bg-black">
      <h2 className="text-3xl">Project not found</h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-10">
      <motion.div
        className="max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-lg p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-blue-500 mb-6 tracking-wide">
          {project.title}
        </h1>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed flex items-start gap-2"
          whileHover={{ scale: 1.01 }}
        >
          <MdOutlineInfo size={22} className="text-blue-400 mt-1" />
          {project.description}
        </motion.p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-blue-400 flex items-center gap-2 mb-2">
            <MdOutlineAssignment /> Role
          </h2>
          <p className="text-gray-300">{project.role}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-blue-400 flex items-center gap-2 mb-2">
            <FaListUl /> Key Features
          </h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            {project.keyFeatures.map((feature, index) => (
              <li key={index} className="hover:text-blue-300 transition-all">{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-blue-400 flex items-center gap-2 mb-2">
            <FaTools /> Technologies Used
          </h2>
          <p className="text-gray-300">{project.technologies.join(', ')}</p>
        </div>

        <div className="mt-8 text-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-300"
          >
            <FaGithub />
            View on GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
