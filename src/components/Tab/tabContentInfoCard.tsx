import { motion } from "framer-motion";
import { TabContentInfoCardProps } from "../../interfaces";
import Icon from "../Icons";
const TabContentInfoCard = ({
  icon,
  title,
  delay,
}: TabContentInfoCardProps) => {
  return (
    <>
      <motion.div
        className="group relative flex items-center justify-center flex-col p-6 rounded-2xl gap-4 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-brand-500 dark:hover:border-brand-400 shadow-lg hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay }}
        whileHover={{
          y: -8,
          transition: { duration: 0.2 },
        }}
      >
        <div className="p-4 bg-gradient-to-br from-brand-500 to-accent-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Icon icon={icon} className="h-8 w-8 text-white" />
        </div>
        <span className="text-gray-900 dark:text-white text-sm text-center font-semibold">{title}</span>
      </motion.div>
    </>
  );
};

export default TabContentInfoCard;
