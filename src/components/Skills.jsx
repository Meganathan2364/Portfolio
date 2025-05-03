import React from "react";

const skillsData = [
  "Python", 
  "Java", 
  "SQL", 
  "HTML", 
  "CSS", 
  "Excel", 
  "Figma", 
  "Machine Learning", 
  "Data Science", 
  "Data Visualization", 
  "Deep Learning", 
  "Neural Networks", 
  "Git/GitHub", 

];

const Skills = () => {
  return (
    <div className="relative z-0 bg-black w-screen h-screen mt-12 flex flex-col py-12" id="skills">
      <div className="text-white overflow-x-hidden mt-8 flex-grow">
        <div className="z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl">
          <p className="font-light">MY SKILLS</p>
          <h2 className="text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500">
            Skills.
          </h2>

          <div className="mt-12 flex flex-col gap-8">
            {skillsData.map((skill, index) => (
              <div key={index} className="flex items-center space-x-4">
                <span className="text-lg text-gray-100">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
