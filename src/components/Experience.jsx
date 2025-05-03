import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";

// Updated skills with logos
const skillsData = [
  { name: "Python", logo: "/logos/python.webp" },
  { name: "Java", logo: "/logos/java.webp" },
  { name: "SQL", logo: "/logos/sql.webp" },
  { name: "HTML", logo: "/logos/html.jpg" },
  { name: "CSS", logo: "/logos/css.jpg" },
  { name: "Excel", logo: "/logos/excel.png" },
  { name: "Figma", logo: "/logos/figma.jpg" },
  { name: "Machine Learning", logo: "/logos/machine learning.jpg" },
  { name: "Data Science", logo: "/logos/data_science.jpg" },
  { name: "Data Visualization", logo: "/logos/data_visual.webp" },
  { name: "Deep Learning", logo: "/logos/deep learning.avif" },
  { name: "Git/GitHub", logo: "/logos/git.jpg" },
];

const experiences = [
  {
    company: "YBI Foundation",
    role: "Machine Learning & Data Science Intern",
    duration: "June 2024",
    points: [
      "Developed models using Python & scikit-learn.",
      "Deployed ML pipelines with team.",
      "Optimized model performance.",
    ],
  },
  {
    company: "CodSoft",
    role: "Data Science Intern",
    duration: "February 2024",
    points: [
      "Explored fraud detection with ML models.",
      "Performed EDA & data cleaning tasks.",
      "Built dashboards using Excel & Pandas.",
    ],
  },
];

const SkillsExperience = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="w-full min-h-screen bg-black text-white py-16 px-6" id="skills-experience">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-500 mb-10">Skills & Experience</h2>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            className={`px-6 py-2 rounded-full text-lg font-semibold transition duration-300 ${
              activeTab === "skills"
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("skills")}
          >
            <Sparkles className="inline-block mr-2" size={18} />
            Skills
          </button>
          <button
            className={`px-6 py-2 rounded-full text-lg font-semibold transition duration-300 ${
              activeTab === "experience"
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("experience")}
          >
            <Briefcase className="inline-block mr-2" size={18} />
            Experience
          </button>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          {activeTab === "skills" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gray-800 px-5 py-4 rounded-xl text-center cursor-pointer text-white hover:text-black font-semibold flex flex-col items-center"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 mb-2 object-contain"
                  />
                  {skill.name}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-8 mt-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg relative"
                >
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-blue-500">{exp.company}</h3>
                    <p className="text-sm text-gray-400">
                      {exp.role} • {exp.duration}
                    </p>
                  </div>
                  <ul className="list-disc ml-5 space-y-1 text-gray-300 text-sm">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="transition-all duration-200 cursor-pointer"
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                  {/* Hover effect */}
                  <div className="absolute top-0 right-0 p-2 bg-blue-500 text-white rounded-full opacity-0 hover:opacity-100 transition-all duration-300">
                    <span className="text-xs">Learn More</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsExperience;
