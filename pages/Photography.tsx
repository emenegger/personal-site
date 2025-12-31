import { Images, images3 } from "../images/images";
import { ImageCard } from "../components";
import Map from "../components/Map";
import { useCallback, useState } from "react";

const Photography = ({ images }: { images: Images[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhotoId, setCurrentPhotoId] = useState<string | null>("");

  const handleClick = useCallback((id: string | null) => {
    setIsModalOpen((prev) => !prev);
    setCurrentPhotoId(id);
  }, []);

  const currentImage = images.find((ele) => ele.countryId == currentPhotoId);
  const {
    src,
    stampSrc,
    orientation,
    location,
    camera,
    date,
    alt,
    id,
    countryId,
  } = currentImage ?? {};

  return (
    <div className="relative h-screen">
      {isModalOpen && currentImage && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-40" />
          <div className="absolute w-screen h-screen justify-center items-center flex z-50">
            <div className="h-4/5 w-4/5 flex justify-center items-center">
              <ImageCard
                src={src}
                stampSrc={stampSrc}
                orientation={orientation}
                location={location}
                camera={camera}
                date={date}
                alt={alt}
                key={id}
                id={id}
                countryId={countryId}
                onClick={handleClick}
              />
            </div>
          </div>
        </>
      )}
      <Map onClick={handleClick} />
    </div>
  );
};

// const Photography = ({ images }) => {
//   return (
//     <div className="relative min-h-screen">
//       <div className="fixed inset-0 -z-10">
//         <Image
//           src={passports}
//           alt="map-background"
//           fill
//           className="object-cover"
//         />
//       </div>
//       <div className="p-10">
//         {/* <ParallaxContainer images={images} /> */}
//         {images.map(
//           ({ src, stampSrc, orientation, location, camera, date, alt, id }) => (
//             <ImageCard
//               src={src}
//               stampSrc={stampSrc}
//               orientation={orientation}
//               location={location}
//               camera={camera}
//               date={date}
//               alt={alt}
//               key={id}
//               id={id}
//             />
//           )
//         )}
//       </div>
//     </div>
//   );
// };

export async function getStaticProps() {
  return {
    props: { images: images3 },
  };
}

export default Photography;
