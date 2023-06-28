import image1 from "@/assets/images/background.png";
import image2 from "@/assets/images/gym_logo.png";
import image3 from "@/assets/images/photo.jpeg";
import image4 from "@/assets/images/trener.png";
import { StaticImageData } from "next/image";

export const images: StaticImageData[] = [image1, image2, image3, image4];

const imageByIndex = (index: number): StaticImageData => images[index];

export default imageByIndex;
