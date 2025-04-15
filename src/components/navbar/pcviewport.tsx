"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import crystaImage from "@/assets/images/crysta.jpeg";
import { ModeToggle } from "./theme-switch";
import { motion } from "framer-motion";
import { links } from "./index";

export const PCViewport = () => {
  const pathname = usePathname();
  const [selectedLink, setSelectedLink] = useState(pathname);

  // 前のリンクインデックス
  const [prevLinkIndex, setPrevLinkIndex] = useState(
    links.findIndex((link) => link.href === pathname)
  );
  // アニメーション方向
  const [direction, setDirection] = useState<number>(0);

  // 現在のリンクインデックス
  const currentLinkIndex = links.findIndex((link) => link.href === pathname);

  useEffect(() => {
    setSelectedLink(pathname);

    // 方向を設定
    if (prevLinkIndex !== currentLinkIndex) {
      setDirection(prevLinkIndex < currentLinkIndex ? 1 : -1);
      setPrevLinkIndex(currentLinkIndex);
    }
  }, [pathname, currentLinkIndex, prevLinkIndex]);

  // アニメーションバリアント
  const variants = {
    initial: (customDirection: number) => ({
      opacity: 0,
      x: customDirection * -20,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40,
      },
    },
  };

  return (
    <div className='relative w-fit items-center rounded-full dark:border p-1.5 hidden md:inline-flex bg-slate-500 dark:bg-[#252525] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
      <div className='flex items-center mx-4 gap-2'>
        <Image
          src={crystaImage}
          alt='Crysta'
          width={1100}
          height={1150}
          className='size-8 rounded-full'
        />
      </div>

      {links.map((link, index) => (
        <button
          key={link.href}
          className={`relative px-4 py-2 ${
            pathname === link.href ? "z-0" : "z-[1]"
          }`}>
          {pathname === link.href && (
            <motion.div
              className='absolute inset-0 rounded-full bg-white dark:bg-neutral-600'
              variants={variants}
              custom={direction}
              initial='initial'
              animate='animate'
              key={link.href}
            />
          )}
          <Link
            href={link.href}
            onClick={() => {
              setDirection(currentLinkIndex < index ? 1 : -1);
              setPrevLinkIndex(currentLinkIndex);
            }}
            className={`relative block text-sm font-medium transition-colors duration-200 tracking-tight ${
              pathname === link.href
                ? "hover:text-primary text-primary"
                : "hover:text-primary text-primary/60"
            }`}>
            {link.name}
          </Link>
        </button>
      ))}
      <div className='flex items-center mx-4 mt-[1.5px]'>
        <ModeToggle />
      </div>
    </div>
  );
};
