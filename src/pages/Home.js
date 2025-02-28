// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// const Home = ({ darkMode }) => {
//   return (
//     <div className="relative overflow-hidden">
//       {/* Hero Section */}
//       <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
//         {/* Background decorative elements */}
//         <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
//         <div className="absolute top-40 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="md:order-1 order-2">
//               <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 mb-6 backdrop-blur-sm border border-purple-500/20">
//                 <p className="text-sm font-medium">Welcome to my portfolio</p>
//               </div>

//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//                 I'm{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
//                   Your Name
//                 </span>
//               </h1>

//               <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
//                 Full Stack Developer & UI/UX Designer
//               </h2>

//               <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-lg">
//                 I create beautiful, functional websites and applications that
//                 help businesses grow and users achieve their goals.
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   to="/projects"
//                   className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group"
//                 >
//                   View Projects{" "}
//                   <ArrowRight
//                     size={18}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium border border-gray-300 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
//                 >
//                   Contact Me
//                 </Link>
//               </div>
//             </div>

//             <div className="md:order-2 order-1 flex justify-center">
//               <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
//                 <img
//                   src="images/profile.jpg"
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = ({ darkMode }) => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-52 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-1 order-2">
              <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 mb-6 backdrop-blur-sm border border-purple-500/20">
                <p className="text-sm font-medium">Welcome to my portfolio</p>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Fahad Hossain
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Full Stack Developer & UI/UX Designer
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-lg">
                I create beautiful, functional websites and applications that
                help businesses grow and users achieve their goals. Specializing
                in modern web technologies and creative solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group"
                  style={{ position: "relative", zIndex: 5 }}
                >
                  View Projects{" "}
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium border border-gray-300 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{ position: "relative", zIndex: 5 }}
                >
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="md:order-2 order-1 flex justify-center">
              <div className="relative">
                {/* Rotating border effect */}
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-purple-500/30 animate-spin-slow"></div>

                {/* Profile image */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl z-10">
                  <img
                    src="/images/profile.jpg"
                    alt="Your Name - Profile"
                    className="w-full h-full object-cover scale-y-50"
                  />

                  {/* Hover overlay */}
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full shadow-lg px-3 py-1 border border-gray-200 dark:border-gray-700 animate-float">
                  <span className="text-purple-600 font-bold">React</span>
                </div>
                <div className="absolute -top-2 -left-4 bg-white dark:bg-gray-800 rounded-full shadow-lg px-3 py-1 border border-gray-200 dark:border-gray-700 animate-float">
                  <span className="text-purple-600 font-bold">Django</span>
                </div>
                <div className="absolute -bottom-2 -left-6 bg-white dark:bg-gray-800 rounded-full shadow-lg px-3 py-1 border border-gray-200 dark:border-gray-700 animate-float animation-delay-1000">
                  <span className="text-pink-600 font-bold">Node.js</span>
                </div>
                <div className="absolute bottom-10 -right-8 bg-white dark:bg-gray-800 rounded-full shadow-lg px-3 py-1 border border-gray-200 dark:border-gray-700 animate-float animation-delay-2000">
                  <span className="text-blue-600 font-bold">UI/UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
