import { Images, images3 } from "../images/images";
import { useCallback, useState } from "react";
import MapLayout from "../components/MapLayout";
import GridLayout from "../components/GridLayout";

type LayoutType = "map" | "grid" | "carousel";

const colors = {
  active: "text-slate-100",
  inactive: "text-gray-700",
} as const;

const layouts: Record<string, LayoutType> = {
  map: "map",
  grid: "grid",
  carousel: "carousel",
};

interface LayoutTextsProps {
  handleSetLayout: (args: LayoutType) => void;
  type: LayoutType;
  layout: LayoutType;
}

const LayoutText = ({ handleSetLayout, type, layout }: LayoutTextsProps) => {
  return (
    <p
      className={`text-sm ${
        layout === type ? colors.active : colors.inactive
      }`}
      onClick={() => handleSetLayout(type)}
    >
      {type} view
    </p>
  );
};

const Photography = ({ images }: { images: Images[] }) => {
  const [layout, setLayout] = useState<LayoutType>("map");

  const handleSetLayout = useCallback((layout: LayoutType) => {
    setLayout(layout);
  }, []);

  const renderLayout = () => {
    switch(layout) {
      case layouts.map:
        return <MapLayout images={images} />;
      case layouts.grid:
        return <GridLayout images={images} />;
      // case layouts.carousel:
      //   return <CarouselView images={images} />;
      default:
        return <MapLayout images={images} />;
    }
  };

  return (
    <div className="relative min-h-screen w-screen">
      <div className="fixed top-18 right-0 z-50 flex flex-col justify-end font-mono align-end">
        <LayoutText
          handleSetLayout={handleSetLayout}
          type={layouts.grid}
          layout={layout}
        />
        <LayoutText
          handleSetLayout={handleSetLayout}
          type={layouts.map}
          layout={layout}
        />
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
