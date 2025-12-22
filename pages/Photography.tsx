import { images } from "../public/images";
import { ParallaxContainer } from "../components";
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
      <ParallaxContainer images={images} />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { images },
  };
}

export default Photography;
