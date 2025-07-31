import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Project.css';

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Smart Street Light",
      description: "An innovative IoT solution designed to enhance energy efficiency and safety in urban environments. The system integrates temperature and light intensity sensors to ensure optimal street lighting while conserving energy.",
      features: [
        "Temperature Sensors for ambient monitoring",
        "Light Intensity Sensors for natural light detection",
        "Automatic Dimming and Brightening based on sensor data",
        "Energy conservation through smart controls"
      ],
      technologies: ["IoT", "Sensors", "Automation", "Energy Management"],
      category: "IoT"
    },
    {
      id: 2,
      title: "Smart Pole",
      description: "Next-generation street light model integrating various devices like WiFi modems, cameras, LED displays, and emergency SOS to improve public safety and provide comprehensive urban infrastructure.",
      features: [
        "Energy Efficiency with LED lights and smart sensors",
        "Remote Management for centralized control",
        "Surveillance Cameras for security enhancement",
        "Emergency SOS functionality"
      ],
      technologies: ["IoT", "Security", "Smart City", "LED Technology"],
      category: "Smart City"
    },
    {
      id: 3,
      title: "Fault Detection System",
      description: "Automated fault detection system for street lights that identifies issues automatically and sends alert notifications to control rooms, significantly reducing manual fault detection time.",
      features: [
        "Automatic fault identification",
        "Real-time alert notifications",
        "Multiple sensor integration (Lux, tilt, voltage, current)",
        "GSM module with ESP8266 for SMS alerts",
        "Thingspeak integration for data visualization"
      ],
      technologies: ["IoT", "ESP8266", "GSM", "Sensors", "Cloud"],
      category: "IoT"
    },
    {
      id: 4,
      title: "Task Manager",
      description: "A comprehensive task management application that allows users to add, edit, and remove tasks efficiently with an intuitive user interface.",
      features: [
        "Add new tasks",
        "Edit existing tasks",
        "Remove tasks",
        "User-friendly interface"
      ],
      technologies: ["React", "JavaScript", "CSS", "Local Storage"],
      category: "Web App"
    },
    {
      id: 5,
      title: "Students Mark Portal",
      description: "A web application for managing student marks and maintaining a comprehensive database for educational institutions.",
      features: [
        "Student mark entry and management",
        "Database maintenance",
        "Web-based interface",
        "Data organization and retrieval"
      ],
      technologies: ["Web Development", "Database", "PHP", "MySQL"],
      category: "Web App"
    },
    {
      id: 6,
      title: "Expense Tracker",
      description: "An innovative financial management tool designed to help users efficiently monitor and manage their personal and business expenses with intuitive categorization and tracking features.",
      features: [
        "User-friendly interface for easy expense input",
        "Categorization and tagging system",
        "Spending pattern analysis",
        "Budget management tools",
        "Complete financial control"
      ],
      technologies: ["React", "JavaScript", "CSS", "Local Storage"],
      category: "Finance"
    }
  ];

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Featured Projects</h2>
        <p className="section-subtitle animate-on-scroll">
          Explore my latest work and innovative solutions across various domains
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card animate-on-scroll`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-header">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-actions">
                <button className="btn btn-secondary">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="btn-icon" />
                  View Details
                </button>
                <button className="btn btn-primary">
                  <FontAwesomeIcon icon={faGithub} className="btn-icon" />
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
