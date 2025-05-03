import React, { useState } from 'react';
import '../App.css';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserGraduate, FaTrophy, FaMedal, FaClock } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('timeline');

  const toggleTab = (tab) => setActiveTab(tab);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-black text-white py-16 px-6 sm:px-20 flex-1" id="about">
        {/* Introduction Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold flex items-center gap-3 mb-6">
            <FaUserGraduate className="text-blue-400" /> Introduction
          </h2>
          <p className="text-lg leading-8 text-gray-300">
            👨‍💻 Hi, I'm <span className="text-blue-400 font-bold">Meganathan V</span>, a passionate AI and Data Science student 🎓 currently pursuing my Bachelor's degree at St. Joseph’s Institute of Technology (2022 - 2026).
            <br /><br />
            🚀 I'm actively building solutions in Machine Learning, AI, and real-world applications like OCR for number plates, AI-powered accident assistance systems, Medi-Advisor and Hospital Recommendation System.
            <br /><br />
            🧠 My interests include Data Analytics, Deep Learning, Document QA and building smart, scalable applications.
            <br /><br />
            🏆 Achievements & Leadership:
            - Finalist in AI Innovate Hackathon
            - Organizer of Think or Sink Symposium
            - Smart India Hackathon project team member
            <br /><br />
            🏏 I actively play Cricket, ♟ Chess, 🏀 Basketball
            <br /><br />
            📚 SSLC: 73.6%, HSC: 79.2% from Model School, Panruti
          </p>
        </div>

        {/* Tabs Section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold mb-6 flex justify-center items-center gap-3">
            <FaClock className="text-blue-400" /> My Journey
          </h2>
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => toggleTab('timeline')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === 'timeline' ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              Timeline
            </button>
            <button
              onClick={() => toggleTab('achievements')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === 'achievements' ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              Achievements
            </button>
          </div>

          {/* Animated Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'timeline' && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="max-w-2xl mx-auto space-y-6 text-left"
              >
                <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-blue-500 transition-shadow">
                  <h4 className="text-lg font-semibold">2022 - Present</h4>
                  <p className="text-gray-300">Pursuing B.Tech in AI & DS at St. Joseph's Institute of Technology.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-blue-500 transition-shadow">
                  <h4 className="text-lg font-semibold">2024</h4>
                  <p className="text-gray-300">Data Science Intern at CodSoft – contributed to ML projects.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-blue-500 transition-shadow">
                  <h4 className="text-lg font-semibold">2025</h4>
                  <p className="text-gray-300">Finalist at AI Innovate Hackathon – showcased AI innovations.</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'achievements' && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="max-w-2xl mx-auto space-y-6 text-left"
              >
                <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-yellow-400 transition-shadow">
                  <h4 className="text-xl font-semibold flex items-center gap-2">
                    <FaMedal className="text-yellow-400" /> Finalist in AI Innovate Hackathon
                  </h4>
                  <p className="text-gray-300">Recognized for building an impactful AI project.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-green-400 transition-shadow">
                  <h4 className="text-xl font-semibold flex items-center gap-2">
                    <FaTrophy className="text-green-400" /> Organizer of Think or Sink Symposium
                  </h4>
                  <p className="text-gray-300">Led a successful AI/ML symposium at college.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-red-400 transition-shadow">
                  <h4 className="text-xl font-semibold flex items-center gap-2">
                    <FaTrophy className="text-red-400" /> Smart India Hackathon Participator
                  </h4>
                  <p className="text-gray-300">Worked on carbon footprint solutions for Indian coal mines.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default About;
