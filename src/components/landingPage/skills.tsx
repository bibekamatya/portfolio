import { motion } from "framer-motion";
import { SKILLS_DATA } from "../../dataSheet";
import { Header } from "./../header";
import Icon from "../Icons";

const Skills = () => {
  return (
    <div className="relative">
      <Header header="Skills & Technologies" />
      
      <div className="space-y-12">
        {SKILLS_DATA.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {/* Category Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brand-600 rounded-lg">
                <Icon icon={category.icon} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {category.title}
              </h3>
            </div>

            {/* Skills as Tags */}
            <div className="flex flex-wrap gap-3">
              {category.items.map((item, itemIdx) => (
                <motion.div
                  key={itemIdx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: itemIdx * 0.02 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group relative"
                >
                  <div className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-brand-500 dark:hover:border-brand-500 rounded-full transition-all duration-200 cursor-default shadow-sm hover:shadow-md backdrop-blur-sm">
                    <Icon icon={item.icon} className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
