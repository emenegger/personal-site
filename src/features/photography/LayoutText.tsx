import { motion, Variants } from "framer-motion";
import { useCallback } from "react";
import { LayoutType } from "./types";

const colors = {
  active: "text-slate-100",
  inactive: "text-gray-400",
} as const;

interface LayoutTextsProps {
  onClick: (args: LayoutType) => void;
  label: LayoutType;
  layout: LayoutType;
}

const LayoutText = ({ onClick, label, layout }: LayoutTextsProps) => {
  const isActive = layout === label;

  const handleOnLabelSelect = useCallback(() => {
    onClick(label);
  }, [label, onClick]);

  return (
    <motion.p
      className={`text-sm cursor-pointer ${
        isActive ? colors.active : colors.inactive
      } hover:text-slate-200`}
      onClick={handleOnLabelSelect}
      animate={{ scale: isActive ? [1, 1.2, 1] : 1 }}
      transition={{ duration: 0.75, ease: "easeInOut", delay: 2 }}
    >
      {label} view
    </motion.p>
  );
};

export default LayoutText;
