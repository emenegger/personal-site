import { Images, images3 } from "../images/images";
import { useCallback, useState } from "react";
import MapLayout from "../components/MapLayout";
import GridLayout from "../components/GridLayout";
import CarouselLayout from "../components/CarouselLayout";

type LayoutType = "map" | "grid" | "carousel";

const colors = {
  active: "text-slate-100",
  inactive: "text-gray-700",
} as const;

const layouts: Record<string, LayoutType> = {
  map: "map",
  grid: "grid",
  carousel: "carousel",
} as const;

interface LayoutTextsProps {
  handleSetLayout: (args: LayoutType) => void;
  type: LayoutType;
  layout: LayoutType;
}

// to do: move this into a separate component
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

const Photography = ({ images }: { images: Images[] }) => {
  const [layout, setLayout] = useState<LayoutType>(layouts.grid);

  const handleSetLayout = useCallback((layout: LayoutType) => {
    setLayout(layout);
  }, []);

  const renderLayout = () => {
    switch (layout) {
      case layouts.map:
        return <MapLayout images={images} />;
      case layouts.grid:
        return <GridLayout images={images} />;
      case layouts.carousel:
        return <CarouselLayout images={images} />;
      default:
        return <MapLayout images={images} />;
    }
  };

  return (
    <div className="relative min-h-screen w-screen">
      <div className="fixed top-18 right-0 z-50 flex flex-col justify-end font-mono align-end">
        {Object.values(layouts).map((key) => (
          <LayoutText
            handleSetLayout={handleSetLayout}
            type={key}
            layout={layout}
          />
        ))}
      </div>
      {renderLayout()}
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { images: images3 },
  };
}

export default Photography;
