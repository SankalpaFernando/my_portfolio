/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LogoCarouselProps {
  companies: string[];
  autorotateTiming?: number;
  direction?: "left" | "right";
}

const LogoSlider: React.FC<LogoCarouselProps> = ({
  companies,
  autorotateTiming = 3000,
  direction = "right",
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [radius, setRadius] = useState<number>(180);
  const [logoSize, setLogoSize] = useState<number>(120);

  // Adjust radius & logo size based on screen width
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setRadius(80); // Smaller radius for mobile
        setLogoSize(70); // Smaller logos
      } else {
        setRadius(180); // Default for desktop
        setLogoSize(120);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (!companies || companies.length === 0) return;

    const interval = setInterval(() => {
      slide(direction);
    }, autorotateTiming);

    return () => clearInterval(interval);
  }, [companies, autorotateTiming, direction]);

  const slide = (dir: "left" | "right") => {
    const step = dir === "right" ? 1 : -1;
    setActiveIndex(
      (prevIndex) => (prevIndex + step + companies.length) % companies.length
    );
  };

  const calculatePosition = (offset: number) => {
    const angle = offset * (Math.PI / 3);
    return {
      x: Math.sin(angle) * radius,
      y: -Math.cos(angle) * radius + radius / 2,
    };
  };

  const logoVariants = useMemo(
    () => ({
      enter: (offset: number) => {
        const { x, y } = calculatePosition(direction === "right" ? -2 : 2);
        return { x, y, opacity: 0, scale: 0.5 };
      },
      center: (offset: number) => {
        const { x, y } = calculatePosition(offset);
        return {
          x,
          y,
          opacity: 1,
          scale: offset === 0 ? 1 : 0.7,
          transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
        };
      },
      exit: (offset: number) => {
        const { x, y } = calculatePosition(direction === "right" ? 2 : -2);
        return {
          x,
          y,
          opacity: 0,
          scale: 0.5,
          transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
        };
      },
    }),
    [direction, radius]
  );

  const visibleLogos = useMemo(() => {
    if (!companies || companies.length === 0) return [];
    return [-1, 0, 1].map((offset) => {
      const index =
        (activeIndex + offset + companies.length) % companies.length;
      return { offset, logo: companies[index], index };
    });
  }, [activeIndex, companies]);

  return (
    <div className="w-full px-4 md:px-10 flex justify-center">
      <div className="relative h-[200px] md:h-[250px] overflow-hidden flex justify-center">
        <div className="relative min-w-[300px] md:min-w-[500px] min-h-[300px] md:min-h-[500px] flex justify-center">
          <AnimatePresence initial={false}>
            {visibleLogos.map(({ offset, logo, index }) => (
              <motion.div
                key={index}
                custom={offset}
                variants={logoVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute"
                style={{
                  top: "30%",
                  // left: "50%",
                  // transform: "translate(-50%, -50%)",
                }}
              >
                <Image
                  src={logo}
                  width={logoSize}
                  height={logoSize}
                  alt={`Company logo ${index + 1}`}
                  className="dark:brightness-200"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
