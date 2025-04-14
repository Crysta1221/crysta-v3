"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import crystaImage from "@/assets/images/crysta.jpeg";
import { ModeToggle } from "./theme-switch";
import { motion } from "framer-motion";
import { links } from "./index";

export const PCViewport = () => {
  const pathname = usePathname();
  const [selectedLink, setSelectedLink] = useState(pathname);

  useEffect(() => {
    setSelectedLink(pathname);
  }, [pathname]);
  return (
    <div className='relative w-fit items-center rounded-full p-1.5 hidden md:inline-flex bg-[#202020] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
      <div className='flex items-center mx-4 gap-2'>
        <Image
          src={crystaImage}
          alt='Crysta'
          width={1100}
          height={1150}
          className='size-8 rounded-full'
        />
      </div>

      {links.map((link) => (
        <button
          key={link.href}
          className={`relative px-4 py-2 ${
            pathname === link.href ? "z-0" : "z-[1]"
          }`}>
          {pathname === link.href && (
            <motion.div
              layoutId='underline'
              className='absolute inset-0 rounded-full bg-neutral-100/70 dark:bg-neutral-700'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 40 }}
              style={{
                transform: "none",
                transformOrigin: "50% 50% 0px",
              }}></motion.div>
          )}
          <Link
            href={link.href}
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
