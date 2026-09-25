import { motion } from "framer-motion";
import { OTHER_PROJECTS_DATA } from "../../dataSheet";

const OtherProjects = () => {
  return (
    <div className="mt-12">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Other Projects
      </h3>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {OTHER_PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex-shrink-0 w-64 p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-brand-500 dark:hover:border-brand-500 rounded-xl transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                {project.title}
              </h4>
              {project.deployedLink && (
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-10 flex-shrink-0 text-gray-400 hover:text-brand-500 transition-colors"
                >
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 rounded-md"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs px-2 py-0.5 text-gray-400">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;
