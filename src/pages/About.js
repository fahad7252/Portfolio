// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, Download } from "lucide-react";

// const About = ({ darkMode }) => {
//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 mb-4 backdrop-blur-sm border border-purple-500/20">
//               <p className="text-sm font-medium">About Me</p>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold">
//               My Journey & Skills
//             </h1>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="relative">
//                 {/* Decorative element */}
//                 <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
//                 <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>

//                 <div className="relative z-10">
//                   <img
//                     src="/placeholder-profile.jpg"
//                     alt="About Me"
//                     className="rounded-2xl shadow-2xl w-full"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-6">
//               <h2 className="text-3xl font-bold mb-4">Who I Am</h2>

//               <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
//                 Hello! I'm{" "}
//                 <span className="font-semibold text-purple-600 dark:text-purple-400">
//                   Your Name
//                 </span>
//                 , a passionate Full Stack Developer and UI/UX Designer with over
//                 5 years of professional experience in creating digital solutions
//                 for businesses and individuals.
//               </p>

//               <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
//                 My journey in web development began in 2018 when I decided to
//                 turn my passion for technology into a career. Since then, I've
//                 worked with various technologies and frameworks, constantly
//                 improving my skills and staying up-to-date with the latest
//                 industry trends.
//               </p>

//               <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
//                 When I'm not coding, you'll find me exploring new technologies,
//                 contributing to open-source projects, hiking in the mountains,
//                 or enjoying a good book with a cup of coffee.
//               </p>

//               <div className="flex flex-wrap gap-4 pt-4">
//                 <a
//                   href="/resume.pdf"
//                   className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
//                 >
//                   <Download size={18} /> Download CV
//                 </a>
//                 <Link
//                   to="/contact"
//                   className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium border border-gray-300 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
//                 >
//                   Let's Talk <ArrowRight size={18} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 mb-4 backdrop-blur-sm border border-purple-500/20">
//               <p className="text-sm font-medium">My Expertise</p>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold">
//               Skills & Technologies
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Technical Skills */}
//             <div className="space-y-6">
//               <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>

//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="font-medium">React / React Native</span>
//                   <span>95%</span>
//                 </div>
//                 <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
//                     style={{ width: "95%" }}
//                   ></div>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="font-medium">JavaScript / TypeScript</span>
//                   <span>90%</span>
//                 </div>
//                 <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
//                     style={{ width: "90%" }}
//                   ></div>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="font-medium">Node.js / Express</span>
//                   <span>85%</span>
//                 </div>
//                 <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
//                     style={{ width: "85%" }}
//                   ></div>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="font-medium">HTML / CSS / SASS</span>
//                   <span>95%</span>
//                 </div>
//                 <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
//                     style={{ width: "95%" }}
//                   ></div>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="font-medium">MongoDB / SQL</span>
//                   <span>80%</span>
//                 </div>
//                 <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
//                     style={{ width: "80%" }}
//                   ></div>
//                 </div>
//               </div>
//             </div>

//             {/* Tools & Frameworks */}
//             <div>
//               <h3 className="text-2xl font-bold mb-6">Tools & Frameworks</h3>

//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
//                   <h4 className="font-bold mb-2">Frontend</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">
//                       React
//                     </span>
//                     <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">
//                       Next.js
//                     </span>
//                     <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">
//                       TailwindCSS
//                     </span>
//                   </div>
//                 </div>

//                 <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
//                   <h4 className="font-bold mb-2">Backend</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 text-sm rounded-full">
//                       Node.js
//                     </span>
//                     <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 text-sm rounded-full">
//                       Express
//                     </span>
//                     <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 text-sm rounded-full">
//                       MongoDB
//                     </span>
//                   </div>
//                 </div>

//                 <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
//                   <h4 className="font-bold mb-2">Design</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">
//                       Figma
//                     </span>
//                     <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">
//                       Adobe XD
//                     </span>
//                     <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">
//                       Photoshop
//                     </span>
//                   </div>
//                 </div>

//                 <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
//                   <h4 className="font-bold mb-2">Other</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">
//                       Git
//                     </span>
//                     <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">
//                       Docker
//                     </span>
//                     <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">
//                       AWS
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;
import React from "react";
import { Link } from "react-router-dom";

// const About = () => {
//   // Organize skills by category
//   const skills = {
//     Frontend: [
//       { name: "HTML", level: 90 },
//       { name: "CSS", level: 85 },
//       { name: "JavaScript", level: 85 },
//       { name: "React", level: 80 },
//       { name: "Tailwind CSS", level: 75 },
//       { name: "Bootstrap", level: 80 },
//     ],
//     Backend: [
//       { name: "Python", level: 85 },
//       { name: "Django", level: 80 },
//       { name: "Express", level: 75 },
//       { name: "Flask", level: 70 },
//       { name: "EJS", level: 70 },
//     ],
//     Database: [
//       { name: "SQL", level: 80 },
//       { name: "NoSQL", level: 75 },
//       { name: "MongoDB", level: 80 },
//       { name: "PostgreSQL", level: 75 },
//       { name: "NeonDB", level: 70 },
//     ],
//     "DevOps & Tools": [
//       { name: "Git/GitHub", level: 85 },
//       { name: "Docker", level: 70 },
//       { name: "Kubernetes", level: 65 },
//       { name: "Heroku", level: 75 },
//       { name: "VS Code", level: 90 },
//       { name: "Trello", level: 80 },
//       { name: "Figma", level: 80 },
//     ],
//     Platforms: [
//       { name: "GoDaddy", level: 75 },
//       { name: "Squarespace", level: 80 },
//       { name: "Wix", level: 80 },
//       { name: "Shopify", level: 75 },
//     ],
//     Other: [
//       { name: "AI/ML", level: 65 },
//       { name: "Vite", level: 70 },
//       { name: "Ubuntu", level: 80 },
//       { name: "Windows", level: 85 },
//       { name: "macOS", level: 75 },
//     ],
//   };

//   return (
//     <div className="min-h-screen pt-16 pb-12">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
//           <p className="text-xl max-w-3xl mx-auto opacity-90">
//             Full Stack Developer passionate about creating beautiful, functional
//             web applications using modern technologies.
//           </p>
//         </div>
//       </section>

//       {/* Bio Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <div className="flex flex-col md:flex-row gap-12">
//             <div className="md:w-1/3">
//               <div className="sticky top-24">
//                 <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
//                   <img
//                     src="/placeholder-profile.jpg"
//                     alt="Profile"
//                     className="w-full aspect-square object-cover"
//                   />
//                 </div>

//                 <div className="mt-8 space-y-4">
//                   <h3 className="text-xl font-bold">Contact Details</h3>
//                   <p className="flex items-center text-gray-700">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5 mr-2 text-purple-600"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                       <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                     </svg>
//                     your.email@example.com
//                   </p>
//                   <p className="flex items-center text-gray-700">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5 mr-2 text-purple-600"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     Location, Country
//                   </p>
//                   <div className="flex gap-4 mt-6">
//                     <a
//                       href="https://github.com/yourusername"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-gray-700 hover:text-purple-600"
//                     >
//                       <svg
//                         className="w-6 h-6"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                         aria-hidden="true"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//                           clipRule="evenodd"
//                         ></path>
//                       </svg>
//                     </a>
//                     <a
//                       href="https://linkedin.com/in/yourusername"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-gray-700 hover:text-purple-600"
//                     >
//                       <svg
//                         className="w-6 h-6"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                         aria-hidden="true"
//                       >
//                         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="md:w-2/3">
//               <h2 className="text-3xl font-bold mb-6">My Journey</h2>

//               <div className="prose prose-lg max-w-none">
//                 <p>
//                   Hello! I'm a passionate Full Stack Developer with expertise in
//                   building modern web applications and websites. My journey in
//                   tech started with a curiosity about how websites work, which
//                   led me to dive deep into web development.
//                 </p>

//                 <p>
//                   With a strong foundation in both frontend and backend
//                   technologies, I enjoy creating seamless user experiences while
//                   ensuring robust and scalable backend systems. I'm particularly
//                   interested in React ecosystem and modern JavaScript
//                   frameworks, as well as Python-based backends.
//                 </p>

//                 <p>
//                   When I'm not coding, you can find me exploring new
//                   technologies, contributing to open-source projects, or sharing
//                   my knowledge with the developer community.
//                 </p>

//                 <h3 className="text-2xl font-bold mt-10 mb-6">Experience</h3>

//                 <div className="mb-8 border-l-4 border-purple-500 pl-6">
//                   <h4 className="font-bold text-xl">Senior Developer</h4>
//                   <p className="text-gray-700">Company Name • 2021 - Present</p>
//                   <p className="mt-2">
//                     Led development of several key projects, collaborating with
//                     cross-functional teams to deliver high-quality web
//                     applications.
//                   </p>
//                 </div>

//                 <div className="mb-8 border-l-4 border-purple-500 pl-6">
//                   <h4 className="font-bold text-xl">Web Developer</h4>
//                   <p className="text-gray-700">
//                     Previous Company • 2018 - 2021
//                   </p>
//                   <p className="mt-2">
//                     Developed and maintained websites and applications for
//                     various clients, focusing on responsive design and
//                     performance optimization.
//                   </p>
//                 </div>

//                 <h3 className="text-2xl font-bold mt-10 mb-6">Education</h3>

//                 <div className="mb-8 border-l-4 border-purple-500 pl-6">
//                   <h4 className="font-bold text-xl">
//                     Bachelor of Science in Computer Science
//                   </h4>
//                   <p className="text-gray-700">University Name • 2014 - 2018</p>
//                   <p className="mt-2">
//                     Studied core computer science principles, data structures,
//                     algorithms, and software engineering.
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-12">
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
//                 >
//                   Get In Touch
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 ml-2"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {Object.entries(skills).map(([category, categorySkills]) => (
//               <div key={category} className="bg-white rounded-xl shadow-lg p-6">
//                 <h3 className="text-xl font-bold mb-6 text-purple-600">
//                   {category}
//                 </h3>

//                 <div className="space-y-4">
//                   {categorySkills.map((skill) => (
//                     <div key={skill.name}>
//                       <div className="flex justify-between mb-1">
//                         <span className="font-medium">{skill.name}</span>
//                         <span className="text-gray-500">{skill.level}%</span>
//                       </div>
//                       <div className="h-2 bg-gray-200 rounded-full">
//                         <div
//                           className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
//                           style={{ width: `${skill.level}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

const About = () => {
  // Organize skills by category
  const skills = {
    Frontend: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Bootstrap", level: 80 },
    ],
    Backend: [
      { name: "Python", level: 85 },
      { name: "Django", level: 80 },
      { name: "Express", level: 75 },
      { name: "Flask", level: 70 },
      { name: "EJS", level: 70 },
    ],
    Database: [
      { name: "SQL", level: 80 },
      { name: "NoSQL", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "NeonDB", level: 70 },
    ],
    "DevOps & Tools": [
      { name: "Git/GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Kubernetes", level: 65 },
      { name: "Heroku", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "Trello", level: 80 },
    ],
    Platforms: [
      { name: "GoDaddy", level: 75 },
      { name: "Squarespace", level: 80 },
      { name: "Wix", level: 80 },
      { name: "Shopify", level: 75 },
    ],
    Other: [
      { name: "AI/ML", level: 65 },
      { name: "Vite", level: 70 },
      { name: "Ubuntu", level: 80 },
      { name: "Windows", level: 85 },
      { name: "macOS", level: 75 },
    ],
  };

  return (
    <div className="min-h-screen pt-16 pb-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Full Stack Developer passionate about creating beautiful, functional
            web applications using modern technologies.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="images/profile.jpg"
                    alt="Profile"
                    className="w-full aspect-square object-cover"
                  />
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-bold">Contact Details</h3>
                  <p className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    skr_fah@hotmail.com
                  </p>
                  <p className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    New York, United States
                  </p>
                  <div className="flex gap-4 mt-6">
                    <a
                      href="https://github.com/fahad7252"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/fahad-hossain-2954b1a9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Hello! I'm a passionate Full Stack Developer with expertise in
                  building modern web applications and websites. My journey in
                  tech started with a curiosity about how websites work, which
                  led me to dive deep into web development.
                </p>

                <p>
                  With a strong foundation in both frontend and backend
                  technologies, I enjoy creating seamless user experiences while
                  ensuring robust and scalable backend systems. I'm particularly
                  interested in React ecosystem and modern JavaScript
                  frameworks, as well as Python-based backends.
                </p>

                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge with the developer community.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-6">Experience</h3>

                <div className="mb-8 border-l-4 border-purple-500 pl-6">
                  <h4 className="font-bold text-xl">
                    Software Engineering fellow
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    General Assembly • 2024 - Present
                  </p>
                  <p className="mt-2">
                    Development of several projects, collaborating with
                    cross-functional teams to deliver high-quality web
                    applications. worked with React, Express, EJS, Jinja, python
                    Django, HTML, CSS, JAVASCRIPT, PYTHON, SQL, MongoDB, Heroku,
                    Trello, Lucid Boards, Bash, GoDaddy etc.
                  </p>
                </div>

                {/* <div className="mb-8 border-l-4 border-purple-500 pl-6">
                  <h4 className="font-bold text-xl">Web Developer</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Previous Company • 2018 - 2021
                  </p>
                  <p className="mt-2">
                    Developed and maintained websites and applications for
                    various clients, focusing on responsive design and
                    performance optimization.
                  </p>
                </div> */}

                <h3 className="text-2xl font-bold mt-10 mb-6">Education</h3>
                <div className="mb-8 border-l-4 border-purple-500 pl-6">
                  <h4 className="font-bold text-xl">
                    Diploma/Bootcamp in Software Engineering
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    General Assembly • 2024 - 2025
                  </p>
                </div>
                <div className="mb-8 border-l-4 border-purple-500 pl-6">
                  <h4 className="font-bold text-xl">
                    Associate of Science in Engineering technology
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Queens Borough cc • 2018 - 2023
                  </p>
                </div>
              </div>

              <div className="mt-12"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, categorySkills]) => (
              <div
                key={category}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold mb-6 text-purple-600 dark:text-purple-400">
                  {category}
                </h3>

                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
