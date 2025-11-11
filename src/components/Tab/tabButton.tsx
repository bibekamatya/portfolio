import { motion } from "framer-motion";
import { TabButtonProps } from "../../interfaces";
import Icon from "../Icons";

const TabButton = ({ isActive, onClick, icon, title }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
        isActive
          ? "text-white shadow-lg scale-105"
          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900"
      }`}
    >
      {isActive && (
        <motion.span
          layoutId="activeTab"
          className="absolute inset-0 bg-gradient-to-r from-brand-500 to-accent-500 rounded-xl"
          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        />
      )}
      <Icon icon={icon} className="h-6 w-6 relative z-10" />
      <span className="text-sm md:text-base font-medium relative z-10 hidden sm:block">{title}</span>
    </button>
  );
};

export default TabButton;
