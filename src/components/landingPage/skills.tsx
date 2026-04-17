import { motion } from "framer-motion";
import { SKILLS_DATA } from "../../dataSheet";
import { Header } from "./../header";
import Icon from "../Icons";

const Skills = () => {
  return (
    <div className="relative">
      <Header header="Skills & Technologies" />

      <div className="space-y-8">
        {SKILLS_DATA.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-brand-600 rounded-lg">
                <Icon icon={category.icon} className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.items.map((item, itemIdx) => (
                <motion.div
                  key={itemIdx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: itemIdx * 0.02 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-brand-500 dark:hover:border-brand-500 rounded-full transition-all duration-200 cursor-default shadow-sm hover:shadow-md">
                    <Icon
                      icon={item.icon}
                      className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400"
                    />
                    <span className="text-xs font-medium text-gray-900 dark:text-white">
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
