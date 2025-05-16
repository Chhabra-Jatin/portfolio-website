import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Typed from 'typed.js';
import { Github, Linkedin, Mail } from "lucide-react";
import emailjs from 'emailjs-com';

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const typedRef = useRef(null);
  const modalRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { margin: "-100px" });
  const isExperienceInView = useInView(experienceRef, { margin: "-100px" });
  const isProjectsInView = useInView(projectsRef, { margin: "-100px" });

  useEffect(() => {
    let typedInstance;
    if (typedRef.current) {
      typedInstance = new Typed(typedRef.current, {
        strings: ['Software Developer', 'Problem Solver'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });
    }
    return () => typedInstance?.destroy();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_wy5bmoi', 'template_xte2q15', formData, '-bKs_FcAEJPR75lKh')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.error('Email sending failed:', error.text);
        alert("Failed to send message. Please try again.");
      });

    setShowModal(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const techIcons = [
    { icon: "react", x: 20, y: 15, delay: 0.7 },
    { icon: "java", x: 75, y: 13, delay: 0.7 },
    { icon: "javascript", x: 25, y: 70, delay: 0.7 },
    { icon: "spring", x: 70, y: 75, delay: 0.7 },
    { icon: "html5", x: 10, y: 40, delay: 0.7 },
    { icon: "css3", x: 80, y: 50, delay: 0.7 }
  ];

  const experienceData = [
    {
      title: "Cognizant (Dec. 2020 – Aug. 2023)",
      role: "Software Developer",
      details: [
        "Built and maintained RESTful API endpoints to support various functionalities and improve integration capabilities.",
        "Designed a role-based access control to enforce security policies across microservices, enhancing security and access control by 50%.",
        "Wrote unit tests and automated regression tests to ensure high-quality code, using JUnit and Mockito.",
        "Streamlined deployment processes by implementing DevOps automation and CI/CD pipelines using Jenkins, Git, and Nexus to automate builds and deployments, reducing deployment time from hours to minutes, for release reliability.",
        "Partnered with the product management team to gather requirements and actively participated in calls to address technical issues.",
        "Analyzed and modified existing batch scripts to accommodate business rule changes."
      ]
    },
    {
      title: "Nugen IT Services (Jan. 2020 – Nov. 2020)",
      role: "Frontend Developer",
      details: [
        "Built reusable React components and optimized frontend performance using React hooks and Redux for state management, improving application performance and reducing load times by 20%.",
        "Developed responsive and intuitive user interfaces using React, Redux, and modern JavaScript frameworks, adhering to design thinking principles.",
        "Implemented lazy loading and code splitting for improved page load speed."
      ]
    }
  ];

  const projects = [
    {
      title: "Blog Application",
      tech: ["spring", "java", "mysql"],
      github: "https://github.com/Chhabra-Jatin/blog-application",
      details: [
        "Built a robust RESTful API for blog application featuring POSTs, COMMENTS and CATEGORY management.",
        "Optimized REST APIs by introducing pagination and caching, reducing API response times by 60%.",
        "Integrated authentication and authorization mechanisms to ensure secure access to the API endpoints.",
        "Utilized Spring Security for role-based access control, enforcing permissions for different user roles."
      ]
    },
    {
      title: "Food Order Application",
      tech: ["react", "firebase"],
      github: "https://github.com/Chhabra-Jatin/food-order-application",
      details: [
        "Developed a user-friendly web application for online food ordering.",
        "Implemented cart system, menu viewing, and order placement.",
        "Used Firebase Realtime Database for seamless data management."
      ]
    },
    {
      title: "Employee Data Management System",
      tech: ["react", "spring", "mysql"],
      github: "https://github.com/Chhabra-Jatin/employee-data-management/tree/master",
      details: [
        "A full-stack web application that allows users to manage employee records with ease.",
        "Configured CORS to enable secure cross-origin communication between frontend and backend",
        "Integrated with MySQL using Spring Data JPA for persistent employee data.",
        "Communicates via RESTful APIs using Axios for HTTP requests from React to Spring Boot."
      ]
    },
    {
      title: "Warzone Game Development",
      tech: ["java"],
      github: "https://github.com/RancyKaur/WarzoneSOEN6441",
      details: [
        "Created multiplayer strategy game using OOP design patterns.",
        "Developed CLI interface with real-time game validation.",
        "Implemented save/load game state features with unit testing."
      ]
    }
  ];

  const skills = [
    { label: "Java", percent: 90 },
    { label: "SpringBoot", percent: 85 },
    { label: "SQL", percent: 90 },
    { label: "JavaScript", percent: 90 },
    { label: "ReactJS", percent: 85 },
    { label: "AWS", percent: 60 },
    { label: "Microservices", percent: 60 },
    { label: "Python", percent: 70 },
    { label: "JUnit", percent: 75 },
    { label: "Git", percent: 70 },
    { label: "Docker & Kubernetes", percent: 50 }
  ];

  return (
    <div className="relative min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden font-sans text-[1.2rem] leading-relaxed">
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none z-0">
        {techIcons.map(({ icon, x, y, delay }) => (
          <motion.img
            key={icon}
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
            alt={icon}
            className="absolute w-20 h-20 opacity-20 mix-blend-lighten"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.45, 1],
              x: [0, Math.random() * 30 - 10, 0],
              y: [0, Math.random() * 30 - 10, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="fixed w-full bg-[#0f0f0f]/70 backdrop-blur-md text-white z-50 shadow-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-blue-400 tracking-wide uppercase"></h1>
          <div className="flex gap-4">
            <a href="https://github.com/Chhabra-Jatin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300"><Github /></a>
            <a href="https://linkedin.com/in/jatinchhabra1997" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300"><Linkedin /></a>
            <a href="mailto:jatin.chhabra772@gmail.com" className="hover:text-blue-400 transition-colors duration-300"><Mail /></a>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="min-h-screen flex items-center justify-center text-center px-4 relative z-10">
        <div>
          <h2 className="text-6xl sm:text-7xl font-extrabold mb-6 text-blue-400 leading-tight tracking-tight">
            Hi, I'm <span className="text-white">Jatin Chhabra</span>
          </h2>
          <p className="text-3xl md:text-4xl text-gray-300 font-semibold">
            I'm a <span ref={typedRef} className="text-blue-300 font-semibold"></span>
          </p>
          <a
            href="/myresume.pdf"
            download
            className="inline-block mt-6 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg rounded-lg transition-all duration-300 shadow-md"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <motion.section
        ref={experienceRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-24 max-w-7xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-red-400 mb-12">Experience</h2>
        {experienceData.map((exp, i) => (
          <div key={i} className="mb-12">
            <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
            <p className="italic text-red-200 mb-4">{exp.role}</p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
              {exp.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-24 max-w-7xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-blue-400 mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="relative h-64 group [perspective:1000px] rounded-xl shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 p-6 backface-hidden overflow-hidden">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    {project.title}
                    {project.tech.map(tech => (
                      <img
                        key={tech}
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                        alt={tech}
                        className="h-6 w-6"
                      />
                    ))}
                  </h3>
                  <ul className="list-disc list-inside space-y-3 text-lg text-gray-300">
                    {project.details.map((detail, j) => (
                      <li key={j} className="truncate hover:whitespace-normal">{detail}</li>
                    ))}
                  </ul>
                </div>
                <div className="absolute inset-0 bg-black/80 text-center flex flex-col items-center justify-center backface-hidden [transform:rotateY(180deg)]">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                  >
                    View Code on GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="px-6 py-24 max-w-7xl mx-auto" ref={skillsRef}>
        <h2 className="text-5xl font-bold text-blue-400 mb-12">Skillset</h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
          {skills.map((skill, i) => (
            <div key={i} className="flex justify-between items-center">
              <span className="text-lg font-medium text-white w-48">{skill.label}</span>
              <div className="flex-1 ml-4">
                <div className="relative w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isSkillsInView ? { width: `${skill.percent}%` } : {}}
                    transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                    className="absolute top-0 left-0 h-3 bg-blue-500 rounded-full"
                  ></motion.div>
                </div>
              </div>
              <span className="ml-4 text-sm text-gray-300 font-semibold">{skill.percent}%</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/30 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-lg transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      {showModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-sm p-4"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-black border border-gray-700 rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-blue-400">Contact Me</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <motion.button
                    type="button"
                    onClick={() => setShowModal(false)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} [Jatin Chhabra]. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
