import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Typed from "typed.js";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import emailjs from "emailjs-com";

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const typedRef = useRef(null);
  const modalRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { margin: "-100px" });
  const isExperienceInView = useInView(experienceRef, { margin: "-100px" });
  const isProjectsInView = useInView(projectsRef, { margin: "-100px" });
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: false, margin: "-100px" });
  const isEducationInView = useInView(educationRef, {
    once: false,
    margin: "-100px",
  });
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "light" ? false : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    let typedInstance;
    if (typedRef.current) {
      typedInstance = new Typed(typedRef.current, {
        strings: ["Software Developer", "Problem Solver"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });
    }
    return () => typedInstance?.destroy();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_wy5bmoi",
        "template_xte2q15",
        formData,
        "-bKs_FcAEJPR75lKh"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    setShowModal(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const techIcons = [
    { icon: "react", x: 20, y: 15, delay: 0.7 },
    { icon: "java", x: 75, y: 13, delay: 0.7 },
    { icon: "javascript", x: 25, y: 70, delay: 0.7 },
    { icon: "spring", x: 70, y: 75, delay: 0.7 },
    { icon: "html5", x: 10, y: 40, delay: 0.7 },
    { icon: "css3", x: 80, y: 50, delay: 0.7 },
  ];

  const experienceData = [
    {
      title: "Cognizant",
      duration: "Dec. 2020 – Aug. 2022",
      role: "Software Developer",
      details: [
        "Built and maintained RESTful API endpoints using Java, Spring Boot, and Spring Data JPA, enabling seamless data exchange across microservices, improving data processing speed by 40%.",
        "Designed a role-based access control to enforce security policies across microservices, enhancing security and access control by 50%.",
        "Wrote unit tests and automated regression tests to ensure high-quality code, using JUnit and Mockito.",
        "Streamlined deployment processes by implementing DevOps automation and CI/CD pipelines using Jenkins, Git, and Nexus to automate builds and deployments, reducing deployment time from hours to minutes, for release reliability.",
        "Partnered with the product management team to gather requirements and actively participated in calls to address technical issues.",
        "Ensured production batch scripts were up to date, efficient, and error-free, while meeting MetLife SLA requirements.",
        "Debugged and optimized production batch jobs to minimize failures and improve execution time for insurance workflows such as policy updates and claims processing.",
      ],
    },
    {
      title: "Nugen IT Services",
      duration: "Aug. 2019 – Nov. 2020",
      role: "Web Developer",
      details: [
        "Integrated REST APIs with React frontend, enabling seamless data flow between backend services and UI components.",
        "Built reusable React components and optimized frontend performance using React hooks and Redux for state management, improving application performance and reducing load times by 20%.",
        "Developed responsive and intuitive user interfaces using React, Redux, and modern JavaScript frameworks, adhering to design thinking principles.",
        "Implemented lazy loading and code splitting for improved page load speed.",
        "Worked closely with designers and backend developers to deliver user-centric features with pixel-perfect UI implementation.",
      ],
    },
  ];

  const projects = [
    {
      title: "BookVault",
      tech: ["react", "nodejs", "express"],
      demo: "https://bookvault-cj.netlify.app/",
      github: "https://github.com/Chhabra-Jatin/bookvault",
      details: [
        "Developed BookVault, a full-stack web application with a React frontend and Node.js/Express backend, featuring real-time data fetching from a JSON-based database.",
        "Handled secure configuration with environment variables and configured CORS for safe frontend–backend communication.",
        "Implemented RESTful APIs with authentication and authorization using json-server-auth, enabling secure management of products, featured items, orders, and users.",
        "Deployed frontend on Netlify and backend on Render, ensuring seamless integration across environments with proper CORS handling and environment variable management.",
        "Implemented dynamic product filtering and sorting (price, rating, bestseller, in-stock) using React Context and Reducer for real-time UI updates.",
        "Built dynamic search, product listing, and featured products functionality with live API calls, enabling a smooth and interactive user experience."
      ],
    },
    {
      title: "BlogPost",
      tech: ["react", "redux", "firebase"],
      demo: "https://shareyourblogs.netlify.app/",
      github: "https://github.com/Chhabra-Jatin/blogpost",
      details: [
        "Built a full-stack blogging application using React and Firebase Firestore with real-time data synchronization.",
        "Implemented Google Authentication with Firebase Auth for secure login/logout and user-specific actions.",
        "Designed Create, Edit, and Delete post functionality with role-based access (only authors can modify their posts).",
        "Developed a Like/Dislike system with per-user tracking, live counters, and instant UI updates using optimistic rendering.",
        "Enabled real-time updates across users using Firestore onSnapshot, eliminating manual refreshes.",
        "Added advanced post sorting (Newest, Oldest, Most Liked) with stable tie-break logic for consistent UX."
      ],
    },
    {
      title: "Blog Application",
      tech: ["spring", "java", "mysql"],
      github: "https://github.com/Chhabra-Jatin/blog-application",
      details: [
        "Built a robust RESTful API for blog application featuring POSTs, COMMENTS and CATEGORY management.",
        "Optimized REST APIs by introducing pagination and caching, reducing API response times by 60%.",
        "Integrated authentication and authorization mechanisms to ensure secure access to the API endpoints.",
        "Utilized Spring Security for role-based access control, enforcing permissions for different user roles.",
      ],
    },
    {
      title: "Food Order Application",
      tech: ["react", "firebase"],
      github: "https://github.com/Chhabra-Jatin/food-order-application",
      details: [
        "Built a cloud-hosted web app for online ordering, integrating real-time database updates using Firebase.",
        "Provides users with a seamless experience to view menus, select items, add meals to the cart, and place orders.",
        "Leveraged Firebase Realtime Database to store and manage data efficiently.",
      ],
    },
    {
      title: "Employee Data Management System",
      tech: ["react", "spring", "mysql"],
      github:
        "https://github.com/Chhabra-Jatin/employee-data-management/tree/master",
      details: [
        "A full-stack web application that allows users to manage employee records with ease.",
        "Configured CORS to enable secure cross-origin communication between frontend and backend",
        "Integrated with MySQL using Spring Data JPA for persistent employee data.",
        "Communicates via RESTful APIs using Axios for HTTP requests from React to Spring Boot.",
      ],
    },
    {
      title: "Warzone Game Development",
      tech: ["java"],
      github: "https://github.com/RancyKaur/WarzoneSOEN6441",
      details: [
        "Created multiplayer strategy game using OOP design patterns.",
        "Designed a user-friendly command-line interface for editing maps, managing gameplay, and issuing orders, with real-time validation and error feedback.",
        "Maintained coding standards, architectural modularity, API documentation, and version control with continuous integration pipelines for automated builds and testing.",
      ],
    },
  ];

  const skills = [
    { label: "Java", percent: 90 },
    { label: "C++", percent: 90 },
    { label: "SpringBoot", percent: 85 },
    { label: "MySQL", percent: 90 },
    { label: "MongoDB", percent: 90 },
    { label: "JavaScript", percent: 90 },
    { label: "ReactJS", percent: 85 },
    { label: "AWS", percent: 60 },
    { label: "Microservices", percent: 60 },
    { label: "Python", percent: 70 },
    { label: "JUnit", percent: 75 },
    { label: "Git", percent: 70 },
    { label: "Docker & Kubernetes", percent: 50 },
  ];

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden poppins-medium text-[1.2rem] leading-relaxed transition-colors duration-500 ${
        isDarkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }`}
      style={{
        backgroundColor: isDarkMode ? "#000000" : "#f7f7f7",
        backgroundImage: isDarkMode
          ? "url('/portfolio-website/bullseye-gradient.svg')"
          : "none",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
      }}
    >
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
              y: [0, Math.random() * 30 - 10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="fixed w-full bg-black backdrop-blur-md text-white z-50 shadow-lg border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-blue-400 tracking-wide uppercase"></h1>
          <div className="flex gap-4 items-center justify-center">
            <a
              href="https://github.com/Chhabra-Jatin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={30} />
            </a>
            <a
              href="https://linkedin.com/in/jatinchhabra1997"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={30} />
            </a>
            <a
              href="https://leetcode.com/u/jchhabra772/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <SiLeetcode size={30} />
            </a>
            <a
              href="mailto:jatin.chhabra772@gmail.com"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <Mail size={30} />
            </a>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-1 rounded-lg border-2 transition-colors duration-300
                    ${
                      isDarkMode
                        ? "border-yellow-400 hover:border-yellow-300"
                        : "border-gray-800 hover:border-blue-400"
                    }`}
              title={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1.5M12 19.5V21m8.485-8.485h-1.5M4.515 12H3m13.364 7.364l-1.06-1.06M7.697 7.697l-1.06-1.06m0 10.727l1.06-1.06m7.607-7.607l1.06-1.06M12 8.25a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-gray-300"
                >
                  <path d="M21.64 13.65A9 9 0 0110.35 2.36a9 9 0 1011.29 11.29z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="min-h-screen flex items-center justify-center text-center px-4 relative z-10">
        <div>
          <h2
            className={`text-6xl sm:text-7xl font-extrabold mb-6 leading-tight tracking-tight transition-colors duration-500 ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Hi, I'm{" "}
            <span className={isDarkMode ? "text-white" : "text-black"}>
              Jatin Chhabra
            </span>
          </h2>
          <p
            className={`text-3xl md:text-4xl font-semibold transition-colors duration-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I'm a{" "}
            <span ref={typedRef} className="text-blue-400 font-semibold"></span>
          </p>
          <a
            href={`${import.meta.env.BASE_URL}JatinChhabra-resume.pdf`}
            download
            className="inline-block mt-6 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-base font-bold sm:text-lg rounded-lg transition-all duration-300 shadow-md"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section className="px-6 py-24 max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-x-24 gap-y-12 items-start">
        {/* About Section */}
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, x: -50 }}
          animate={
            isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
          }
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-bold text-red-400 mb-6">About Me</h2>
          <p
            className={`text-lg leading-relaxed transition-colors duration-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            I'm a passionate software developer with a strong foundation in
            computer science and hands-on experience building modern web
            applications. I specialize in crafting scalable, maintainable, and
            efficient software solutions using technologies like Java, Spring
            Boot, React, and AWS. With a keen eye for detail and a continuous
            learning mindset, I strive to write clean, performant code and
            deliver high-quality user experiences.
          </p>
          <p
            className={`text-lg leading-relaxed transition-colors duration-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            With over 3 years of professional experience, I have contributed to
            designing scalable APIs, implementing secure microservices, and
            developing modern front-end applications using ReactJS. I thrive on
            solving complex problems, building reliable software, and
            continuously improving my craft.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          ref={educationRef}
          initial={{ opacity: 0, x: 50 }}
          animate={
            isEducationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
          }
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-5xl font-bold text-red-400 mb-6">Education</h2>

          <div className="relative border-l-4 border-blue-500 pl-6">
            <div className="absolute -left-[9px] top-0 w-5 h-5 bg-blue-500 rounded-full"></div>
            <h3
              className={`text-xl font-bold mb-1 transition-colors duration-500 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {" "}
              Concordia University
            </h3>
            <p
              className={`italic mb-1 transition-colors duration-500 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {" "}
              Sept. 2022 – June 2024
            </p>
            <p
              className={`mb-1 transition-colors duration-500 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {" "}
              Master's in Applied Computer Science
            </p>
            <p
              className={`transition-colors duration-500 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {" "}
              Montreal, Quebec, Canada
            </p>
          </div>

          <div className="relative border-l-4 border-blue-500 pl-6">
            <div className="absolute -left-[9px] top-0 w-5 h-5 bg-blue-500 rounded-full"></div>
            <h3
              className={`text-xl font-bold mb-1 transition-colors duration-500 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {" "}
              Guru Nanak Dev University
            </h3>
            <p
              className={`italic mb-1 transition-colors duration-500 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              July 2016 – June 2020
            </p>
            <p
              className={`mb-1 transition-colors duration-500 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Bachelor of Technology in Computer Science and Engineering
            </p>
            <p
              className={`transition-colors duration-500 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Punjab, India
            </p>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-red-400 mb-12"
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experienceData.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
              className="relative border-l-4 border-blue-500 pl-6"
            >
              <div className="absolute -left-[9px] top-0 w-5 h-5 bg-blue-500 rounded-full"></div>

              <h3
                className={`text-xl font-bold mb-1 transition-colors duration-500 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {exp.title}
              </h3>

              <p
                className={`text-sm mb-2 italic transition-colors duration-500 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {exp.duration} | {exp.role}
              </p>

              <ul
                className={`list-disc pl-5 space-y-2 transition-colors duration-500 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {exp.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-24 max-w-7xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-red-400 mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className={`relative group rounded-2xl shadow-2xl border overflow-hidden transition-shadow duration-500 ease-in-out ${
                isDarkMode
                  ? "border-blue-700 bg-gradient-to-br from-[#000000] to-[#000000] hover:shadow-blue-500/30"
                  : "border-gray-300 bg-gradient-to-br from-white to-gray-100 hover:shadow-gray-400/30"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="p-6">
                {/* Project title & tech */}
                <h3
                  className={`text-2xl font-bold mb-4 flex items-center gap-2 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  {project.title}
                  {project.tech.map((tech) => (
                    <img
                      key={tech}
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                      alt={tech}
                      className="h-6 w-6 filter invert"
                    />
                  ))}
                </h3>

                {/* Project description with smooth expansion */}
                <ul
                  className={`list-disc list-inside space-y-3 text-lg overflow-visible max-h-full md:overflow-hidden md:max-h-24 md:group-hover:max-h-[1000px] md:transition-[max-height] md:duration-1000 md:ease-in-out ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  {project.details.map((detail, j) => (
                    <li key={j} className="whitespace-normal">
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-lg font-semibold shadow-lg transition duration-300 ${
                      isDarkMode
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  >
                    View Code on GitHub
                  </motion.a>

                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 rounded-lg font-semibold shadow-lg transition duration-300 ${
                        isDarkMode
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "bg-green-500 hover:bg-green-600 text-white"
                      }`}
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="px-6 py-24 max-w-7xl mx-auto" ref={skillsRef}>
        <h2 className="text-5xl font-bold text-red-400 mb-12">Skillset</h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
          {skills.map((skill, i) => (
            <div key={i} className="flex justify-between items-center">
              <span
                className={`text-lg font-medium w-48 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {skill.label}
              </span>
              <div className="flex-1 ml-4">
                <div
                  className={`relative w-full h-3 rounded-full overflow-hidden border border-black ${
                    !isDarkMode ? "bg-white" : "bg-gray-700"
                  }`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={
                      isSkillsInView ? { width: `${skill.percent}%` } : {}
                    }
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                      delay: i * 0.1,
                    }}
                    className={`absolute top-0 left-0 h-3 rounded-full ${
                      !isDarkMode ? "bg-blue-700" : "bg-blue-500"
                    }`}
                  ></motion.div>
                </div>
              </div>
              <span
                className={`ml-4 text-sm font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-gray-800"
                }`}
              >
                {skill.percent}%
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-red-400 mb-6">
              Get in Touch
            </h2>
            <p
              className={`text-xl mb-8 transition-colors duration-500 ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear from you!
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(37, 99, 235, 0.4)",
              }}
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
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
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
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
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
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
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
      <footer className="py-8 text-center">
        <div className="container mx-auto px-6">
          <p
            className={`transition-colors duration-500 ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            &copy; {new Date().getFullYear()} [Jatin Chhabra]. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
