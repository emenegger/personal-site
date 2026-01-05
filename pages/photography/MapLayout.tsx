"use strict";
import { Images, images3 } from "./images";
import ImageCard from "./ImageCard";
import Map, { MapRef } from "./Map";
import { useCallback, useRef, useState } from "react";
import { colors } from "./colors";
import IconButton  from "@mui/material/IconButton";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { aggregatePhotosByLocation } from "./util";

const MapLayout = ({ images }: { images: Images[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhotoId, setCurrentPhotoId] = useState<string | null>("");
  const mapRef = useRef<MapRef>(null);

  const handleClick = useCallback((id: string | null) => {
    setIsModalOpen((prev) => !prev);
    setCurrentPhotoId(id);
  }, []);

  const handleUpClick = useCallback(() => mapRef.current?.panUp(), []);
  const handleDownClick = useCallback(() => mapRef.current?.panDown(), []);
  const handleLeftClick = useCallback(() => mapRef.current?.panLeft(), []);
  const handleRightClick = useCallback(() => mapRef.current?.panRight(), []);
  const handleZoomInClick = useCallback(() => mapRef.current?.zoomIn(), []);
  const handleZoomOutClick = useCallback(() => mapRef.current?.zoomOut(), []);

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
    coordinates
  } = currentImage ?? {};

  const heatPoints = aggregatePhotosByLocation(images); 

  return (
    <div
      className="relative min-h-screen p-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="font-mono flex flex-col md:flex-col justify-center items-center text-center text-[#F5F5DC]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl px-2 text-slate-100">
          photography across the world
        </h1>
        <p className="text-sm md:text-lg px-2 text-slate-100">
          click a country to see more
        </p>
      </div>

      <div className="absolute top-20 right-6 grid grid-cols-2 gap-0 z-30">
        <IconButton onClick={handleZoomInClick} sx={{ color: "#f1f5f9" }}>
          <ZoomInIcon />
        </IconButton>
        <IconButton onClick={handleZoomOutClick} sx={{ color: "#f1f5f9" }}>
          <ZoomOutIcon />
        </IconButton>
        <div className="col-span-2 flex justify-center">
          <IconButton onClick={handleUpClick} sx={{ color: "#f1f5f9" }}>
            <ArrowCircleUpIcon />
          </IconButton>
        </div>
        <IconButton onClick={handleLeftClick} sx={{ color: "#f1f5f9" }}>
          <ArrowCircleLeftIcon />
        </IconButton>
        <IconButton onClick={handleRightClick} sx={{ color: "#f1f5f9" }}>
          <ArrowCircleRightIcon />
        </IconButton>
        <div className="col-span-2 flex justify-center">
          <IconButton onClick={handleDownClick} sx={{ color: "#f1f5f9" }}>
            <ArrowCircleDownIcon />
          </IconButton>
        </div>
      </div>

      {isModalOpen && currentImage && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-40" />
          <div className="absolute w-screen h-screen justify-center items-start flex z-50">
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
                coordinates={coordinates}
                showCloseButton
              />
            </div>
          </div>
        </>
      )}
      <Map onClick={handleClick} ref={mapRef} heatPoints={heatPoints}/>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { images: images3 },
  };
}

export default MapLayout;
