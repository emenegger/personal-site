import { images } from "../public/images";
import { ParallaxContainer } from "../components";
import Image from "next/image";
import passports from '../public/images/passports.jpg'

const Photography = ({ images }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <Image src={passports} alt="map-background" fill className="object-cover" />
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
