import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { Header } from "../header";
import { PROJECTS_DATA } from "../../dataSheet";
import { Project } from "../../interfaces";
import OffCanvas from "../canvas";

const Projects = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  const toggleCanvas = () => {
    setIsCanvasOpen(!isCanvasOpen);
  };

  // Memoize function for performance improvement
  const openCanvasWithProject = useCallback(
    (project: Project, e?: React.MouseEvent) => {
      e?.preventDefault();
      setSelectedProject(project);
      setIsCanvasOpen(true);
    },
    []
  );

  // Handle mobile click interaction
  const handleMobileClick = (index: number) => {
    if (isHovered === index) {
      setIsHovered(null); // Hide on second tap
    } else {
      setIsHovered(index); // Show on tap
    }
  };

  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>

      <Header header="Featured Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
            onClick={() => handleMobileClick(index)}
            className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            {/* Image */}
            <div className="relative overflow-hidden aspect-video">
              <img
                loading="lazy"
                src={project.displayImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => (e.currentTarget.src = "/default-image.jpg")}
              />

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 flex flex-col items-center justify-center p-6 text-center"
              >
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: isHovered === index ? 0 : 20,
                    opacity: isHovered === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-2xl font-bold text-white mb-3"
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: isHovered === index ? 0 : 20,
                    opacity: isHovered === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-gray-200 text-sm mb-6 line-clamp-3"
                >
                  {project.description}
                </motion.p>

                {project.showDetails && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isHovered === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      openCanvasWithProject(project, e);
                    }}
                    className="px-5 py-2.5 text-xs bg-white hover:bg-brand-600 text-gray-900 hover:text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    View Details
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                )}
              </motion.div>
            </div>

            {/* Bottom Label - Desktop */}
            <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 transform translate-y-0 group-hover:translate-y-full transition-transform duration-500">
              <h3 className="text-white font-bold text-lg">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.type}</p>
            </div>

            {/* Project Info Card - Mobile */}
            <div className="md:hidden p-5 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 text-gray-500 dark:text-gray-400">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <OffCanvas
        isOpen={isCanvasOpen}
        toggleCanvas={toggleCanvas}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;
