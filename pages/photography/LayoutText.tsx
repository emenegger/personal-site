import { LayoutType } from "../Photography";

const colors = {
  active: "text-slate-100",
  inactive: "text-gray-400",
} as const;

interface LayoutTextsProps {
  handleSetLayout: (args: LayoutType) => void;
  type: LayoutType;
  layout: LayoutType;
}

const LayoutText = ({ handleSetLayout, type, layout }: LayoutTextsProps) => {
  return (
    <p
      className={`text-sm ${layout === type ? colors.active : colors.inactive}`}
      onClick={() => handleSetLayout(type)}
    >
      {type} view
    </p>
  );
};

export default LayoutText;