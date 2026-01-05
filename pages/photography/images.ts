import { StaticImageData } from "next/image";
import {
  beach,
  spainPassportStamp,
  dinosaur,
  mexicoPassportStamp,
  malagaPark,
  eiffelTower,
  francePassportStamp,
  pnwLake,
  usPassportStamp,
  chileRainbow,
  chilePassportStamp,
  salurDeUyuni,
  evanInBerlin,
  germanyPassportStamp,
  colombia,
  colombiaPassportStamp,
  petersburg,
  russiaPassportStamp,
  thailand,
  zion,
  maine,
  boliviaPassportStamp,
  laPaz,
} from "../../public/images";

export interface Images {
  location: string | undefined;
  camera:
    | "canon eos 650"
    | "nikon d750"
    | "nikon d7500"
    | "unknown"
    | "dji mini 2"
    | undefined;
  date: string | undefined;
  src: StaticImageData | undefined;
  stampSrc: StaticImageData | undefined;
  orientation: "portrait" | "landscape" | undefined;
  alt: string | undefined;
  id: number | undefined;
  countryId: string | undefined;
  coordinates: [lon: number, lat: number] | undefined; 
}

export const images3: Images[] = [
  {
    location: "nerja, spain",
    camera: "canon eos 650",
    orientation: "landscape",
    date: "11/12/2025",
    src: beach,
    stampSrc: spainPassportStamp,
    alt: "nerja beach",
    id: 1,
    countryId: "724",
    coordinates: [-3.868422, 36.749495],
  },
  {
    location: "progresso, mexico",
    camera: "canon eos 650",
    orientation: "landscape",
    date: "02/22/2025",
    src: dinosaur,
    stampSrc: mexicoPassportStamp,
    alt: "progresso dino",
    id: 2,
    countryId: "484",
    coordinates: [-89.655851, 21.288643],
  },
  {
    location: "malaga, spain",
    camera: "canon eos 650",
    orientation: "landscape",
    date: "10/30/2025",
    src: malagaPark,
    stampSrc: spainPassportStamp,
    alt: "malagaPark",
    id: 3,
    countryId: "724",
    coordinates: [-4.416854, 36.71837],
  },
  {
    location: "paris, france",
    camera: "canon eos 650",
    orientation: "portrait",
    date: "10/2/2025",
    src: eiffelTower,
    stampSrc: francePassportStamp,
    alt: "eiffel tower",
    id: 4,
    countryId: "250",
    coordinates: [2.293333, 48.859189],
  },
  {
    location: "olympia, washington",
    camera: "nikon d7500",
    orientation: "landscape",
    date: "10/2/2025", // update date
    src: pnwLake,
    stampSrc: usPassportStamp,
    alt: "pnw lake",
    id: 5,
    countryId: "840",
    coordinates: [-122.909858, 47.03037],
  },
  {
    location: "torres del paine, chile",
    camera: "nikon d7500",
    orientation: "landscape",
    date: "12/01/2022",
    src: chileRainbow,
    stampSrc: chilePassportStamp,
    alt: "tdp lake",
    id: 6,
    countryId: "152",
    coordinates: [-72.990258, -50.948319],
  },
  {
    location: "salar de uyuni, bolivia",
    camera: "canon eos 650",
    orientation: "landscape",
    date: "10/2/2025", // update date
    src: salurDeUyuni,
    stampSrc: boliviaPassportStamp,
    alt: "salar de uyuni",
    id: 7,
    countryId: "068",
    coordinates: [-67.765335, -20.102586],
  },
  {
    location: "berlin, germany",
    camera: "nikon d750",
    orientation: "landscape",
    date: "10/2/2025", // update date
    src: evanInBerlin,
    stampSrc: germanyPassportStamp,
    alt: "evan in berlin",
    id: 8,
    countryId: "276",
    coordinates: [13.439584, 52.487216],
  },
  {
    location: "tayrona, colombia",
    camera: "nikon d7500",
    orientation: "landscape",
    date: "10/2/2025", // update date
    src: colombia,
    stampSrc: colombiaPassportStamp,
    alt: "tayrona",
    id: 9,
    countryId: "170",
    coordinates: [-74.076313, 11.316167],
  },
  {
    location: "saint petersburg, russia",
    camera: "unknown",
    orientation: "landscape",
    date: "03/02/2012",
    src: petersburg,
    stampSrc: russiaPassportStamp,
    alt: "petersburg",
    id: 10,
    countryId: "643",
    coordinates: [30.316997, 59.90952],
  },
  {
    location: "ko phi phi, thailand",
    camera: "unknown",
    orientation: "landscape",
    date: "07/05/2017",
    src: thailand,
    stampSrc: russiaPassportStamp,
    alt: "phi phi",
    id: 11,
    countryId: "764",
    coordinates: [98.77125, 7.739207],
  },
  {
    location: "zion national park, utah",
    camera: 'canon eos 650',
    orientation: 'portrait',
    date: "04/19/2025",
    src: zion,
    stampSrc: usPassportStamp,
    alt: "zion",
    id: 12,
    countryId: "840",
    coordinates: [-112.953987, 37.266807],
  },
  {
    location: "union, maine",
    camera: 'dji mini 2',
    orientation: 'landscape',
    date: "10/09/2021",
    src: maine,
    stampSrc: usPassportStamp,
    alt: "maine",
    id: 13,
    countryId: "840",
    coordinates: [-69.254181, 44.173768],
  },
  {
    location: "la paz, bolivia",
    camera: "canon eos 650",
    orientation: "landscape",
    date: "04/24/2024",
    src: laPaz,
    stampSrc: boliviaPassportStamp,
    alt: "salar de uyuni",
    id: 14,
    countryId: "068",
    coordinates: [-67.765335, -20.102586],
  },
];

export const images = [
  {
    src: "https://imagizer.imageshack.com/img922/9748/mny1WW.jpg",
    alt: "actual tdp",
    id: 4,
  },
  {
    src: "https://imagizer.imageshack.com/img923/1533/n23Tc5.jpg",
    alt: "blue water tdp",
    id: 5,
  },
  {
    src: "https://imagizer.imageshack.com/img923/91/yp8mkk.jpg",
    alt: "mountain in tdp",
    id: 1,
  },
  {
    src: "https://imagizer.imageshack.com/img924/8949/jVYEhN.jpg",
    alt: "mountain and tree in tdp",
    id: 2,
  },
  {
    src: "https://imagizer.imageshack.com/img922/4851/ycuBnW.jpg",
    alt: "cloudy mountain in tdp",
    id: 3,
  },
  {
    src: "https://imagizer.imageshack.com/img923/2386/WnqJrK.jpg",
    alt: "valapariso",
    id: 6,
  },
  {
    src: "https://imagizer.imageshack.com/img922/7338/3KWc63.jpg",
    alt: "santiago at night",
    id: 7,
  },
  {
    src: "https://imagizer.imageshack.com/img923/5341/NcxQTN.jpg",
    alt: "santiago at sunset",
    id: 8,
  },
  {
    src: "https://imagizer.imageshack.com/img922/7506/jPBNxk.jpg",
    alt: "light store in cdmx",
    id: 9,
  },
  {
    src: "https://imagizer.imageshack.com/img924/1734/ceUtJz.jpg",
    alt: "china town cdmx",
    id: 10,
  },
  {
    src: "https://imagizer.imageshack.com/img924/2214/0Ek8Hi.jpg",
    alt: "plant on church",
    id: 11,
  },
  {
    src: "https://imagizer.imageshack.com/img923/2361/z2As0n.jpg",
    alt: "library",
    id: 12,
  },
  {
    src: "https://imagizer.imageshack.com/img923/1733/bdiggm.jpg",
    alt: "tree in onp",
    id: 13,
  },
  {
    src: "https://imagizer.imageshack.com/img922/2378/RD6aaJ.jpg",
    alt: "lake 1 in onp",
    id: 14,
  },
  {
    src: "https://imagizer.imageshack.com/img923/5476/ZUZwOf.jpg",
    alt: "lake with house onp",
    id: 15,
  },
  {
    src: "https://imagizer.imageshack.com/img922/1858/mU5sEK.jpg",
    alt: "day of the dead",
    id: 16,
  },
  {
    src: "https://imagizer.imageshack.com/img922/9117/utK4zc.jpg",
    alt: "tombs",
    id: 17,
  },
  {
    src: "https://imagizer.imageshack.com/img924/3/cPW2Ni.jpg",
    alt: "flowers",
    id: 18,
  },
];

export const images2 = images
  .map((ele, i) => ({ ...ele, src2: images[i + 9]?.src }))
  .slice(0, 9);
