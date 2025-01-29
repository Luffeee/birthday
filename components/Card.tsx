"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import "../assets/css/card.css";
import Link from "next/link"; // Updated import for Next.js

const Card: React.FC = () => {
  const [cardClass, setCardClass] = useState<string>("");
  const [isCardOpened, setIsCardOpened] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null); // Added type for useRef

  const toggleCard = () => {
    if (cardClass === "" || cardClass === "close-half") {
      setCardClass("open-half");
      setIsCardOpened(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("open-fully");
        timerRef.current = null;
      }, 1000);
    } else {
      setCardClass("close-half");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("");
        timerRef.current = null;
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-clip">
      <div className="w-[400px] h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          transition={{ duration: 1.2 }}
        >
          <div id="card" className={`${cardClass}`} onClick={toggleCard}>
            <div id="card-inside">
              <div className="wrap">
                <p>Happy Birthday, Sara!</p>
                <p>
                  This is your 20th birthday. And we've been together for 6
                  months now. I love you so much and you mean the world to me.
                </p>
                <p>I hope you have a very blessed birthday!</p>
                <p>
                  I hope we stay together forever, and I want you to know that
                  you are my favorite person.
                </p>
                <p>
                  Thank you for always being by my side.
                  <br />I LOVE YOU!!!
                </p>
                <p className="signed">Charbel Abou Nader</p>
              </div>
            </div>

            <div id="card-front">
              <div className="wrap">
                <h1>Happy Birthday!</h1>
              </div>
            </div>
          </div>
        </motion.div>

        {/* prone to bugs */}
        {isCardOpened && (
          <motion.div
            className="-mt-[3rem]"
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={{ opacity: 1, visibility: "visible" }}
            transition={{ duration: 1.2 }}
          >
            <Link href="/cake">
              <p className="-mt-[4rem] px-7 py-3 bg-customBlue text-white font-medium text-base rounded-full hover:bg-blue-600">
                Next Page
              </p>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Card;
