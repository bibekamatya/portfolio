import { motion } from "framer-motion";
import { Header } from "../header";
import { EDUCATION_DATA } from "../../dataSheet";
import Icon from "../Icons";

const Education = () => {
  const edu = EDUCATION_DATA[0];

  return (
    <div className="relative">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <Header header="Education" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-brand-500 dark:hover:border-brand-500 shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 bg-brand-600 rounded-2xl">
              <Icon icon="graduationCap" className="h-8 w-8 text-white" />
            </div>

            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {edu.degree}
              </h3>
              <p className="font-semibold text-brand-600 dark:text-brand-400">
                {edu.field} &bull; {edu.board}
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                {edu.institution}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                {edu.address}
              </p>
              <span className="inline-block px-3 py-1 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 rounded-full text-sm font-medium">
                Graduated {edu.year}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
