import { StaticImageData } from "next/image";

export interface Images {
  location: string | undefined;
  camera:
    | "canon eos 650"
    | "nikon d750"
    | "nikon d7500"
    | "unknown"
    | "dji mini 2"
    | "samsung galaxy s7"
    | "iphone 14"
    | undefined;
  date: string | undefined;
  src: StaticImageData | undefined;
  stampSrc: StaticImageData | undefined;
  orientation: "portrait" | "landscape" | undefined;
  alt: string | undefined;
  id: number | undefined;
  countryId: string | undefined;
  coordinates: [lon: number, lat: number] | undefined;
  tags: Tags[];
  isPriority: boolean | undefined;
};

export type Tags = 'map' | 'grid' | 'carousel';

export type LayoutType = "map" | "grid" | "carousel";