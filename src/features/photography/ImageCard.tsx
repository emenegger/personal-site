import Image from "next/image";
import { useCallback } from "react";
import { placeholder } from "../../../public/images";
import { Images } from "./types";

type ImageCardProps = Omit<Images, "tags"> & {
  onClick?: (args: string | null) => void;
  showCloseButton?: boolean;
  sizes?: string;
};

const ImageCard = ({
  orientation = "landscape",
  src = placeholder,
  location,
  camera,
  date,
  stampSrc = placeholder,
  alt = "",
  onClick,
  showCloseButton = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  isPriority,
}: ImageCardProps) => {
  const aspectRatio =
    orientation === "landscape" ? "aspect-[4/3]" : "aspect-[3/4]";

  const textSize =
    orientation === "landscape"
      ? "text-xs sm:text-lg md:text-m"
      : "text-xs sm:text-base";

  const handleClick = useCallback(() => {
    onClick && onClick(null);
  }, [onClick]);

  return (
    <div className={`bg-amber-50 p-4 pb-8 shadow-xl rounded-lg mb-4`}>
      {showCloseButton && (
        <div
          className={`flex flex-col text-gray-700 font-mono text-sm sm:text-base`}
          onClick={handleClick}
        >
          <p>close</p>
        </div>
      )}
      <div className={`relative ${aspectRatio} bg-amber-50`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover pb-4"
          loading={isPriority ? 'eager' : 'lazy'}
          priority={isPriority}
          sizes={sizes}
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className={`flex flex-col text-gray-700 font-mono ${textSize}`}>
          <p>location: {location}</p>
          <p>camera: {camera}</p>
          <p>date: {date}</p>
        </div>
        <div className="max-w-48 h-12 w-auto md:h-20 flex align-center px-1">
          <Image
            src={stampSrc}
            alt="stamp"
            width={200}
            height={150}
            className="rounded-1xl md:rounded-2xl w-full h-auto object-contain opacity-50 shadow-l"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
