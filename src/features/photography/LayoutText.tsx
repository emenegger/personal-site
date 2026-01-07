import { LayoutType } from "./types";

const colors = {
  active: "text-slate-100",
  inactive: "text-gray-400",
} as const;

interface LayoutTextsProps {
  handleSetLayout: (args: LayoutType) => void;
  label: LayoutType;
  layout: LayoutType;
}

const LayoutText = ({ handleSetLayout, label, layout }: LayoutTextsProps) => {
  return (
    <p
      className={`text-sm ${layout === label ? colors.active : colors.inactive}`}
      onClick={() => handleSetLayout(label)}
    >
      {label} view
    </p>
  );
};

export default LayoutText;