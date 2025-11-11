import { motion } from "framer-motion";
import { EXPERIENCES_DATA } from "../../dataSheet";
import { Header } from "../header";

const Experiences = () => {
  return (
    <div className="relative">
      <Header header="Work Experience" />
      
      <div className="space-y-8">
        {EXPERIENCES_DATA.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-8 w-3 h-3 bg-brand-600 rounded-full shadow-lg"></div>
            <div className="absolute left-[5px] top-12 bottom-0 w-0.5 bg-brand-600/30"></div>
            
            {/* Content */}
            <div className="ml-8 p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl hover:border-brand-500 dark:hover:border-brand-500 transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-lg">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-lg font-semibold text-brand-600 dark:text-brand-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-full w-fit">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {exp.duration}
                </div>
              </div>

              {/* Details */}
              <ul className="space-y-2">
                {exp.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                    <span className="text-sm leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
