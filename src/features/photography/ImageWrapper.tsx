import React, { ReactNode, useCallback } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface ImageWrapperProps {
  index: number;
  id: number | undefined;
  children: ReactNode;
  onClick: (args: "left" | "right") => void;
}

const ImageWrapper = ({
  index,
  id,
  children,
  onClick,
}: ImageWrapperProps) => {
  const position = index - 2;
  const isCenter = position === 0;
  const isLeft = position > 0;
  const isRight = position < 0;

  // to do: DRY this
  const getCardStyle = () => {
    const zIndex = isCenter ? 40 : position < 0 ? 40 + position : 40 - position;

    if (isCenter) {
      return {
        zIndex,
        transform: "translateX(0) scale(1)",
      };
    } else if (position < 0) {
      return {
        zIndex,
        transform: `translateX(${position * 10}vw) scale(${
          1 - Math.abs(position) * 0.1
        })`,
      };
    } else {
      return {
        zIndex,
        transform: `translateX(${position * 10}vw) scale(${
          1 - position * 0.1
        })`,
      };
    }
  };

  const style = getCardStyle();

  const handleLeftClick = useCallback(() => {
    onClick("left");
  }, [onClick]);

  const handleRightClick = useCallback(() => {
    onClick("right");
  }, [onClick]);

  return (
    <div
      key={id}
      className="absolute transition-all duration-300 border-black w-[55vw] h-auto"
      style={style}
    >
      {isCenter && (
        <>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/20 hover:bg-black/40 hover:scale-125 rounded-full p-1 md:p-2 transition-all cursor-pointer">
            <ChevronLeftIcon
              className="text-white text-4xl"
              onClick={handleLeftClick}
            />
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/20 hover:bg-black/40 hover:scale-125 rounded-full p-1 md:p-2 transition-all cursor-pointer">
            <ChevronRightIcon
              className="text-white text-4xl"
              onClick={handleRightClick}
            />
          </div>
        </>
      )}
      {children}
    </div>
  );
};

export default ImageWrapper;
