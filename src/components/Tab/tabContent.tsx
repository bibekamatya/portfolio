import { motion } from "framer-motion";
import TabContentInfoCard from "./tabContentInfoCard";
import { TabContentProps } from "../../interfaces";
import Icon from "../Icons";

const TabContent = ({ category, activeTab }: TabContentProps) => {
  return (
    <motion.div
      key={activeTab}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-gradient-to-br from-brand-500 to-accent-500 rounded-xl">
          <Icon icon={category.icon} className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {category.title}
        </h3>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
        {category.items.map((item, idx) => (
          <TabContentInfoCard
            key={idx}
            icon={item.icon}
            title={item.title}
            delay={idx * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TabContent;
