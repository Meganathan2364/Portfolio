import stock from "../assets/drum.png";
import diseaseAdvisor from "../assets/Medi.png";
import accidentAssistant from "../assets/simon.png";

export const project = [
  {
    id: "stock-suggestor",
    title: "Stock Suggestor",
    description: "ML-based system analyzing shop invoice data for insights.",
    image: stock,
    git: "https://github.com/Meganathan2364",
    overview: "Predictive system for shop owners to plan inventory based on invoice trends.",
    problem: "Over/under-stocking due to lack of prediction.",
    solution: "Machine learning-based suggestion system using past invoice data.",
    role: "Collected and cleaned data, built ML model using Pandas, Python and integrated into a user system.",
    keyFeatures: ["Invoice upload", "Sales pattern analysis", "Downloadable reports", "Stock suggestions"],
    technologies: ["Python", "Pandas", "Machine Learning"]
  },
  {
    id: "disease-advisor",
    title: "Disease Advisory and Hospital Recommendation System",
    description: "Healthcare system offering advice based on symptoms and severity.",
    image: diseaseAdvisor,
    git: "https://github.com/Meganathan2364",
    overview: "A Flask-based healthcare assistant to advise users and suggest hospitals.",
    problem: "Lack of awareness about symptom severity and suitable hospitals.",
    solution: "System to assess severity and suggest hospitals with contact details.",
    role: "Collected medical data, processed symptom-severity mapping, built hospital recommender.",
    keyFeatures: ["Symptom input", "Urgency assessment", "Hospital recommendations", "Feedback system"],
    technologies: ["Python", "Flask", "Pandas", "ML"]
  },
  {
    id: "accident-assistance",
    title: "AI-Powered Accident Assistance",
    description: "AI tool to manage accident emergencies with real-time response.",
    image: accidentAssistant,
    git: "https://github.com/Meganathan2364",
    overview: "AI and IoT system to respond quickly to road accidents via video input.",
    problem: "Delayed response and lack of structured info after accidents.",
    solution: "Public-uploaded videos analyzed using ML, sends alerts to ambulance, police, and family.",
    role: "Built severity analysis model, integrated location sharing and ambulance routing logic.",
    keyFeatures: ["Video severity detection", "Emergency alert system", "GPS tracking", "IoT signal control"],
    technologies: ["Python", "AI", "Machine Learning", "IoT"]
  }
];
