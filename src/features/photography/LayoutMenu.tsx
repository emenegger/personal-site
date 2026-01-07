import { motion, Variants } from "framer-motion";
import LayoutText from "./LayoutText";
import { LayoutType } from "./types";

interface LayoutMenuProps {
  labels: LayoutType[];
  currentLayout: LayoutType;
  onSelect: (layout: string) => void;
}

// to do: move this into a shared file
const ulVariants: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0,
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

const liVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const LayoutMenu = ({ labels, currentLayout, onSelect }: LayoutMenuProps) => {
  return (
    <motion.div variants={ulVariants} initial="hidden" animate="visible" className="px-2">
      {labels.map((label, index) => (
        <motion.div key={index} variants={liVariants}>
          <LayoutText
            handleSetLayout={onSelect}
            label={label}
            layout={currentLayout}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LayoutMenu;
