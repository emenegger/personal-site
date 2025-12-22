import { images } from "../public/images";
import { ImageCard, ParallaxContainer } from "../components";
import Image from "next/image";
import passports from "../public/images/passports.jpg";

const Photography = ({ images }) => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Image
          src={passports}
          alt="map-background"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-10">
        {/* <ParallaxContainer images={images} /> */}
        <ImageCard/>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { images },
  };
}

export default Photography;
