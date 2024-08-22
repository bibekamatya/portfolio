import { motion } from "framer-motion";
import { TabContentInfoCardProps } from "../../../interfaces";
import Icon from "../Icons";
import { GlowingCard } from "../glowingCard";

export const TabContentInfoCard = ({
  icon,
  title,
  delay,
}: TabContentInfoCardProps) => {
  return (
    <>
      <motion.div
        className="text-md flex items-center justify-center flex-col p-2 border-b border-skyBlue rounded-xl gap-4 h-28 w-full custom-shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay }}
        whileHover={{
          // rotateY: 180,
          scale: 1.05,
          transition: { duration: 0.3, delay: 0.1 },
        }}
      >
        <Icon icon={icon} className="h-8 w-8 text-skyBlue" />
        <span className="text-skyBlue text-xs text-center">{title}</span>
      </motion.div>
    </>
  );
};

export const TabContentInfoCard1 = ({
  icon,
  title,
  delay,
}: TabContentInfoCardProps) => {
  return (
    <motion.div
      // className="text-md flex items-center justify-center flex-col p-2 border border-skyBlue rounded-xl gap-4 h-28 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{
        // rotateY: 180,
        scale: 1.05,
        transition: { duration: 0.3, delay: 0.1 },
      }}
    >
      <GlowingCard glow="shadow-[0_0_5px_5px_rgba(0,255,255,0.6)]">
        <div className="flex flex-col items-center gap-4 w-full">
          <Icon icon={icon} className="h-8 w-8 text-skyBlue" />
          <span className="text-skyBlue text-xs text-center">{title}</span>
        </div>
      </GlowingCard>
    </motion.div>
  );
};
