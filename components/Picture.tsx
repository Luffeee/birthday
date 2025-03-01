"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { picture1, picture2, picture3, picture4 } from "../assets";
import Link from "next/link"; // Updated import for Next.js
import SectionWrapper from "./SectionWrapper";
import Image, { StaticImageData } from "next/image";
import "../assets/css/present.css";

// Add your own images by putting them in the assets folder and import them.
const images: StaticImageData[] = [picture1, picture2, picture3, picture4];

const Picture: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<number>(0);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  const allImagesLoaded: boolean = loadedImages === images.length;

  return (
    <SectionWrapper>
      <Link href="/card">
        <p className="absolute text-4xl font-bold text-customBlue inset-0 flex justify-center items-center text-center transform rotate-6 cursor-pointer">
          I love you so much
        </p>
      </Link>
      {!allImagesLoaded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-xl font-medium text-gray-500">Loading images...</p>
        </div>
      )}
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            allImagesLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            zIndex: images.length - index,
          }}
          initial={{
            scale: 1,
            rotate: Math.random() * 20 - 10,
          }}
          whileDrag={{
            scale: 1.05,
            rotate: Math.random() * 20 - 10,
          }}
          drag
        >
          <Image
            src={image.src}
            alt={`Stacked image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            onLoad={handleImageLoad} // Increment the counter when the image loads
          />
        </motion.div>
      ))}
    </SectionWrapper>
  );
};

export default Picture;
