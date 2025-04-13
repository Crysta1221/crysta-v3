"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SpaceBackgroundProps {
  starCount?: number;
  meteorFrequency?: number;
  className?: string;
}

export function SpaceBackground({
  starCount = 100,
  meteorFrequency = 10000,
  className,
}: SpaceBackgroundProps) {
  const [stars, setStars] = useState<
    Array<{ id: number; style: React.CSSProperties }>
  >([]);
  const [meteors, setMeteors] = useState<
    Array<{ id: number; style: React.CSSProperties }>
  >([]);
  const [meteorId, setMeteorId] = useState(0);
  const [responsiveStarCount, setResponsiveStarCount] = useState(starCount);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setResponsiveStarCount(Math.floor(starCount * 0.5));
      } else if (window.innerWidth < 992) {
        setResponsiveStarCount(Math.floor(starCount * 0.7));
      } else {
        setResponsiveStarCount(starCount);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [starCount]);

  useEffect(() => {
    const generatedStars = Array.from(
      { length: responsiveStarCount },
      (_, i) => {
        const size = Math.random() * 2 + 1;
        const opacity = Math.random() * 0.7 + 0.3;

        return {
          id: i,
          style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity,
            animationDelay: `${Math.random() * 10}s`,
          },
        };
      }
    );

    setStars(generatedStars);
  }, [responsiveStarCount]);
  useEffect(() => {
    const interval = setInterval(() => {
      const topPosition = Math.random() * 30;
      const duration = Math.random() * 6000 + 3000;
      const newMeteor = {
        id: meteorId,
        style: {
          left: `${Math.random() * 60 + 10}%`,
          top: `${topPosition}%`,
          animationDuration: `${duration}ms`,
        },
      };

      setMeteors((prev) => [...prev, newMeteor]);
      setMeteorId((prev) => prev + 1);

      setTimeout(() => {
        setMeteors((prev) =>
          prev.filter((meteor) => meteor.id !== newMeteor.id)
        );
      }, duration);
    }, meteorFrequency);

    return () => clearInterval(interval);
  }, [meteorId, meteorFrequency]);
  return (
    <div className={cn("space-background", className)}>
      {stars.map((star) => (
        <div key={star.id} className='space-star' style={star.style} />
      ))}
      {meteors.map((meteor) => (
        <div key={meteor.id} className='space-meteor' style={meteor.style} />
      ))}
    </div>
  );
}
