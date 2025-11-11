import { motion } from "framer-motion";
import { Header } from "../header";
import { EDUCATION_DATA } from "../../dataSheet";
import Icon from "../Icons";

const Education = () => {
  return (
    <div className="relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <Header header="Education" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 relative z-10">
        {EDUCATION_DATA.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group"
          >
            <div className="relative p-8 rounded-2xl h-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-brand-500 dark:hover:border-brand-500 shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
              {/* Icon */}
              <div className="flex items-center justify-center h-16 w-16 bg-brand-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon icon="graduationCap" className="h-8 w-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {edu.degree}
              </h3>
              
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <p className="font-semibold text-brand-600 dark:text-brand-400">
                  {edu.field && `${edu.field} • `}
                  {edu.board}
                </p>
                <p className="font-medium">{edu.institution}</p>
                <p className="text-sm">{edu.address}</p>
                <div className="inline-block px-3 py-1 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 rounded-full text-sm font-medium mt-2">
                  {edu.percentage}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
