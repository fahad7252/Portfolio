import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Code,
  Filter,
  ChevronDown,
  Search,
  ArrowRight,
} from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Project data
  const projects = [
    {
      id: 1,
      title: "ShelfSpace Book Tracking App",
      category: "web",
      tags: ["Django", "DTL", "PostgreSQL", "googleAPI"],
      description:
        "A full-featured Book tracking platform with book management, crud functionality, and progress tracking.",
      image: "images/project-images/shelfspace.png",
      link: "https://shelfspace-eff8ead526d6.herokuapp.com/",
      github: "https://github.com/fahad7252/shelfspace.git",
      featured: true,
    },
    {
      id: 2,
      title: "Family Tree",
      category: "web",
      tags: ["React ", "Express", "MongoDB"],
      description:
        "Family tree web application that helps users to create their own family tree and also view member details and drag and drop elements.",
      image: "images/project-images/familytree.png",
      link: "https://familytre-998cac520a22.herokuapp.com/",
      github: "https://github.com/fahad7252/FamilyTree.git",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "web",
      tags: ["React", "TailwindCSS"],
      description: "My portfolio website.",
      image: "images/project-images/portfoliowebsite.png",
      github: "https://github.com/fahad7252/Portfolio.git",
      featured: false,
    },
    {
      id: 4,
      title: "TechVault",
      category: "web",
      tags: ["Express", "EJS", "NoSQL"],
      description:
        " Its a device collection web app where users can share their devices they had with its memories and other users can see them and like comment on them .",
      image: "images/project-images/techvault.png",
      link: "https://techvault-9673b523b26d.herokuapp.com/",
      github: "https://github.com/fahad7252/TechVault.git",
      featured: false,
    },
    {
      id: 5,
      title: "BlackJack Browser game",
      category: "web",
      tags: ["Javascript", "CSS", "Html"],
      description: "A web app for playing Blackjack.",
      image: "images/project-images/blackjack.png",
      link: "https://fahad7252.github.io/project-1-blackjack/",
      github: "https://github.com/fahad7252/project-1-blackjack.git",
      featured: false,
    },
  ];

  // Filter projects based on category and search term
  const filteredProjects = projects.filter((project) => {
    // Apply category filter
    if (filter !== "all" && project.category !== filter) {
      return false;
    }

    // Apply search filter
    if (searchTerm.trim() !== "") {
      const search = searchTerm.toLowerCase();
      return (
        project.title.toLowerCase().includes(search) ||
        project.description.toLowerCase().includes(search) ||
        project.tags.some((tag) => tag.toLowerCase().includes(search))
      );
    }

    return true;
  });

  return (
    <div className="min-h-screen pt-16 pb-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white mb-4 backdrop-blur-sm">
              <p className="text-sm font-medium">My Work</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Projects & Case Studies
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-purple-100">
              Explore my latest projects and see how I bring ideas to life with
              code and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Filters */}
      <section className="py-6 bg-white dark:bg-gray-800 sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full md:w-auto md:min-w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-gray-500 dark:text-gray-400 flex items-center">
                <Filter size={16} className="mr-1" /> Filter:
              </span>
              <div className="flex space-x-2">
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filter === "all"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => setFilter("all")}
                >
                  All
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filter === "web"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => setFilter("web")}
                >
                  Web
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filter === "mobile"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => setFilter("mobile")}
                >
                  Mobile
                </button>
              </div>
            </div>

            {/* Filters - Mobile */}
            <div className="md:hidden">
              <button
                className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900"
                onClick={() => setShowFilters(!showFilters)}
              >
                <span className="flex items-center">
                  <Filter size={16} className="mr-2" />
                  {filter === "all"
                    ? "All Projects"
                    : filter === "web"
                    ? "Web Projects"
                    : "Mobile Projects"}
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    showFilters ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showFilters && (
                <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 shadow-lg absolute z-20 w-full">
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg mb-1 ${
                      filter === "all"
                        ? "bg-purple-600 text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => {
                      setFilter("all");
                      setShowFilters(false);
                    }}
                  >
                    All Projects
                  </button>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg mb-1 ${
                      filter === "web"
                        ? "bg-purple-600 text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => {
                      setFilter("web");
                      setShowFilters(false);
                    }}
                  >
                    Web Projects
                  </button>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg ${
                      filter === "mobile"
                        ? "bg-purple-600 text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => {
                      setFilter("mobile");
                      setShowFilters(false);
                    }}
                  >
                    Mobile Projects
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                No projects match your current filters. Try adjusting your
                search or filter criteria.
              </p>
              <button
                className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
                onClick={() => {
                  setFilter("all");
                  setSearchTerm("");
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <img
                      src={project.image || "/placeholder-project.jpg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {project.featured && (
                      <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/80 to-blue-500/80 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
                          aria-label="View project"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
                          aria-label="View code"
                        >
                          <Code size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-4 line-clamp-2 text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-1"
                      >
                        View Project <ArrowRight size={16} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <Code size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 text-center"></div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Interested in working together? Let's build something amazing!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
