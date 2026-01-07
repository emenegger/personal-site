import { useCallback, useState } from "react";
import {
  CarouselLayout,
  GridLayout,
  MapLayout,
  LayoutMenu,
  images3,
  type Images,
  type LayoutType,
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
        <LayoutMenu
          labels={Object.values(layouts)}
          onSelect={handleSetLayout}
          currentLayout={layout}
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
