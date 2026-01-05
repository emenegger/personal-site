import { Images } from "./images";

export interface LocationHeatPoint {
  coordinates: [number, number] | undefined;
  location: string | undefined;
  count: number;
  photos: Images[];
}

export const aggregatePhotosByLocation = (images: Images[]): LocationHeatPoint[] => {
  const locationMap = new Map<string, LocationHeatPoint>();
  
  images.forEach((image) => {
    //@ts-ignore
    const [lon, lat] = image.coordinates;
    const key = `${lon.toFixed(4)},${lat.toFixed(4)}`;
    
    if (locationMap.has(key)) {
      const existing = locationMap.get(key)!;
      existing.count += 1;
      existing.photos.push(image);
    } else {
      locationMap.set(key, {
        coordinates: image.coordinates,
        location: image.location,
        count: 1,
        photos: [image],
      });
    }
  });
  
  return Array.from(locationMap.values());
};