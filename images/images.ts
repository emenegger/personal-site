import { StaticImageData } from "next/image";
import { beach, spainPassportStamp, dinosaur, mexicoPassportStamp, malagaPark } from '../public/images'


export interface Images {
  location: string;
  camera: 'canon eos 650' | 'nikon d750';
  date: string;
  src: StaticImageData;
  stampSrc: StaticImageData;
  orientation: 'portrait' | 'landscape';
  alt: string;
  id: number;
}

export const images3: Images[] = [
  {
    location: 'nerja, spain',
    camera: 'canon eos 650',
    orientation: 'landscape',
    date: '11/12/2025',
    src: beach,
    stampSrc: spainPassportStamp,
    alt: 'nerja beach',
    id: 1,
  },
  {
    location: 'progresso, mexico',
    camera: 'canon eos 650',
    orientation: 'landscape',
    date: '02/22/2025',
    src: dinosaur,
    stampSrc: mexicoPassportStamp,
    alt: 'progresso dino',
    id: 2,
  },
  {
    location: 'malaga, spain',
    camera: 'canon eos 650',
    orientation: 'landscape',
    date: '10/30/2025',
    src: malagaPark,
    stampSrc: spainPassportStamp,
    alt: 'malagaPark',
    id: 3,
  },
]

export const images = [
  {
    src: "https://imagizer.imageshack.com/img922/9748/mny1WW.jpg",
    alt: "actual tdp",
    id: 4
  },
  {
    src: "https://imagizer.imageshack.com/img923/1533/n23Tc5.jpg",
    alt: "blue water tdp",
    id: 5
  },
  {
    src: "https://imagizer.imageshack.com/img923/91/yp8mkk.jpg",
    alt: "mountain in tdp",
    id: 1
  },
  {
    src: "https://imagizer.imageshack.com/img924/8949/jVYEhN.jpg",
    alt: "mountain and tree in tdp",
    id: 2
  },
  {
    src: "https://imagizer.imageshack.com/img922/4851/ycuBnW.jpg",
    alt: "cloudy mountain in tdp",
    id: 3
  },
  {
    src: "https://imagizer.imageshack.com/img923/2386/WnqJrK.jpg",
    alt: "valapariso",
    id: 6
  },
  {
    src: "https://imagizer.imageshack.com/img922/7338/3KWc63.jpg",
    alt: "santiago at night",
    id: 7
  },
  {
    src: "https://imagizer.imageshack.com/img923/5341/NcxQTN.jpg",
    alt: "santiago at sunset",
    id: 8
  },
  {
    src: "https://imagizer.imageshack.com/img922/7506/jPBNxk.jpg",
    alt: "light store in cdmx",
    id: 9
  },
  {
    src: "https://imagizer.imageshack.com/img924/1734/ceUtJz.jpg",
    alt: "china town cdmx",
    id: 10
  },
  {
    src: "https://imagizer.imageshack.com/img924/2214/0Ek8Hi.jpg",
    alt: "plant on church",
    id: 11
  },
  {
    src: "https://imagizer.imageshack.com/img923/2361/z2As0n.jpg",
    alt: "library",
    id: 12
  },
  {
    src: "https://imagizer.imageshack.com/img923/1733/bdiggm.jpg",
    alt: "tree in onp",
    id: 13
  },
  {
    src: "https://imagizer.imageshack.com/img922/2378/RD6aaJ.jpg",
    alt: "lake 1 in onp",
    id: 14
  },
  {
    src: "https://imagizer.imageshack.com/img923/5476/ZUZwOf.jpg",
    alt: "lake with house onp",
    id: 15
  },
  {
    src: "https://imagizer.imageshack.com/img922/1858/mU5sEK.jpg",
    alt: "day of the dead",
    id: 16
  },
  {
    src: "https://imagizer.imageshack.com/img922/9117/utK4zc.jpg",
    alt: "tombs",
    id: 17
  },
  {
    src: "https://imagizer.imageshack.com/img924/3/cPW2Ni.jpg",
    alt: "flowers",
    id: 18
  },
];

export const images2 = images.map((ele, i) => ({...ele, src2: images[i+9]?.src})).slice(0,9);
