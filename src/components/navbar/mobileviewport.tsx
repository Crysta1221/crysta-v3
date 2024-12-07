"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import crystaImage from "@/assets/images/crysta.jpeg";
import { ModeToggle } from "./theme-switch";
import { motion } from "framer-motion";
import { links } from "./index";
import { Button } from "@/components/ui/button";

export const MobileViewport = () => {
  const pathname = usePathname();
  const [selectedLink, setSelectedLink] = useState(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setSelectedLink(pathname);
  }, [pathname]);
  return (
    <div className='relative flex w-full items-center rounded-full border p-1.5 md:hidden mx-3'>
      <div className='flex items-center mx-4 gap-2'>
        <Image
          src={crystaImage}
          alt='Crysta'
          width={40}
          height={40}
          className='rounded-full'
        />
      </div>
      <div className='flex grow' />
      <div className='flex items-center mx-4 mt-[1.5px] gap-3'>
        <ModeToggle />
        <Button
          variant='ghost'
          className='rounded-full size-9 border-none text-white dark:text-black bg-neutral-800 dark:bg-white/80 hover:bg-neutral-800 hover:dark:bg-white/80 hover:text-white'
          onClick={() => setIsMenuOpen(!isMenuOpen)}></Button>
      </div>
    </div>
  );
};
