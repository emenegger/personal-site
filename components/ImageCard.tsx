import Image from "next/image";
import beach from "../public/images/Evan Emenegger_0014.jpeg";
import spainPassportStamp from "../public/images/spainPassportStamp.png";

const ImageCard = () => {
  return (
    <div className="bg-amber-50 p-4 pb-8 shadow-xl rotate-2 w-3/4 rounded-l">
      <div className="relative aspect-[4/3] bg-amber-50">
        <Image src={beach} alt="beach" fill className="object-cover pb-4" />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col mb-4 text-gray-700 font-mono text-2xl">
          <p>location: nerja, spain</p>
          <p>camera: canon eos 650</p>
          <p>date: 11/12/2025</p>
        </div>
        <div className="max-h-28 bg-amber-50/50 w-auto">
          <Image
            src={spainPassportStamp}
            alt="spain passport stamp"
            className="rounded-2xl h-full w-auto object-contain opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
