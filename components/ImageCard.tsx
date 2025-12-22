import Image from "next/image";
import beach from "../public/images/Evan Emenegger_0014.jpeg";

const ImageCard = () => {
  return (
    <div className="bg-amber-50 p-4 pb-16 shadow-xl rotate-2 w-3/4">
      <div className="relative aspect-[4/3] bg-amber-50">
        <Image src={beach} alt="beach" fill className="object-cover" />
      </div>
      <p className="text-center mt-4 font-handwriting text-gray-700">
        Beach Day
      </p>
    </div>
  );
};

export default ImageCard;
