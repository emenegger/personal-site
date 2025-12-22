import Image from "next/image";
import { Images } from "../images/images";

type ImageCardProps = Images;

const ImageCard = ({
  orientation = "landscape",
  src,
  location,
  camera,
  date,
  stampSrc,
  alt,
}: ImageCardProps) => {
  // to do: add orientation styling
  const aspectRatio =
    orientation === "landscape" ? "aspect-[4/3]" : "aspect-[3/4]";
  const cardWidth = orientation === "landscape" ? "w-3/5" : "w-1/3";

  const textSize =
    orientation === "landscape"
      ? "text-base sm:text-lg md:text-xl"
      : "text-sm sm:text-base";

  return (
    <div
      className={`bg-amber-50 p-4 pb-8 shadow-xl ${cardWidth} rounded-l mb-4`}
    >
      <div className={`relative ${aspectRatio} bg-amber-50`}>
        <Image src={src} alt={alt} fill className="object-cover pb-4" />
      </div>
      <div className="flex flex-row justify-between">
        <div className={`flex flex-col text-gray-700 font-mono ${textSize}`}>
          <p>location: {location}</p>
          <p>camera: {camera}</p>
          <p>date: {date}</p>
        </div>
        <div className="max-w-48 h-auto">
          <Image
            src={stampSrc}
            alt="stamp"
            width={200}
            height={150}
            className="rounded-2xl w-full h-auto object-contain opacity-50 shadow-l"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
