import { Side } from "@/models/camera";

export const getSide = (azimuth: number): Side => {
  if (azimuth < Math.PI / 4) {
    return 0;
  } else if (azimuth < (Math.PI * 3) / 4) {
    return 1;
  } else if (azimuth < (Math.PI * 5) / 4) {
    return 2;
  } else if (azimuth < (Math.PI * 7) / 4) {
    return 3;
  }

  return 0;
};
