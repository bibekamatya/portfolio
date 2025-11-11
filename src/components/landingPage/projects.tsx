import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { Header } from "../header";
import { PROJECTS_DATA } from "../../dataSheet";
import Canvas from "../canvas";
import { Project } from "../../interfaces";

const Projects = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  const toggleCanvas = () => {
    setIsCanvasOpen(!isCanvasOpen);
  };

  // Memoize function for performance improvement
  const openCanvasWithProject = useCallback((project: Project) => {
    setSelectedProject(project);
    toggleCanvas();
  }, []);

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
            <div className="relative h-72 overflow-hidden">
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
                    opacity: isHovered === index ? 1 : 0 
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
                    opacity: isHovered === index ? 1 : 0 
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-gray-200 text-sm mb-6 line-clamp-3"
                >
                  {project.description}
                </motion.p>
                
                {project.showDetails && (
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: isHovered === index ? 0 : 20,
                      opacity: isHovered === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      openCanvasWithProject(project);
                    }}
                    className="px-6 py-3 bg-white hover:bg-brand-600 text-gray-900 hover:text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    View Details
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                )}
              </motion.div>
            </div>
            
            {/* Bottom Label */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 transform translate-y-0 group-hover:translate-y-full transition-transform duration-500">
              <h3 className="text-white font-bold text-lg">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.type}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <Canvas
        isOpen={isCanvasOpen}
        toggleCanvas={toggleCanvas}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;
