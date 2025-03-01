"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Updated import for Next.js

const Home: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(1);
  const router = useRouter(); // Replaced useNavigate with useRouter
  const sentences: string[] = [
    "Hi Princess",
    "I have something to show you :)",
  ];

  const handleClick = () => {
    if (visibleCount < sentences.length) {
      setVisibleCount(visibleCount + 1);
    } else {
      router.push("/pictures"); // Replaced navigate with router.push
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen cursor-pointer w-full items-center justify-center over-flow-clip"
      onClick={handleClick}
    >
      <div className="w-[90%] max-w-[400px] px-8">
        {sentences.slice(0, visibleCount).map((sentence, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl font-bold text-customBlue drop-shadow-lg"
          >
            {sentence}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default Home;
