import { useCallback, useState } from "react";
import {
  CarouselLayout,
  GridLayout,
  MapLayout,
  LayoutText,
  type Images,
  type LayoutType,
  images3,
} from "features/photography";

const layouts: Record<string, LayoutType> = {
  map: "map",
  grid: "grid",
  carousel: "carousel",
} as const;

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
        return <GridLayout images={images} />;
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
