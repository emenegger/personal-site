import { motion, Variants } from "framer-motion";
import LayoutText from "./LayoutText";
import { LayoutType } from "./types";

const parentVariants: Variants = {
  visible: {
    transition: {
      delay: 0,
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface LayoutMenuProps {
  labels: LayoutType[];
  currentLayout: LayoutType;
  onSelect: (layout: string) => void;
}

const LayoutMenu = ({ labels, currentLayout, onSelect }: LayoutMenuProps) => {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="px-2"
    >
      {labels.map((label, index) => (
        <motion.div variants={childVariants} key={`${label}-${index}`}>
          <LayoutText
            onClick={onSelect}
            label={label}
            layout={currentLayout}
            key={index}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LayoutMenu;
