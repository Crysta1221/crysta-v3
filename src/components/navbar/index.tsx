"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ModeToggle } from "./theme-switch";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import crystaImage from "@/assets/images/crysta.jpeg";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "News", href: "/news" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [selectedLink, setSelectedLink] = useState(pathname);

  useEffect(() => {
    setSelectedLink(pathname);
  }, [pathname]);

  return (
    <header className='mx-auto max-w-5xl py-5'>
      <div className='mx-auto flex w-full items-center justify-center'>
        {/* md以上の画面サイズで表示するナビゲーションバー */}
        <div className='relative w-fit items-center rounded-full border p-1.5 hidden md:inline-flex'>
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
                  className='absolute inset-0 rounded-full bg-secondary'
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

        {/* md以下の画面サイズで表示するナビゲーションバー */}
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
          <div className='flex items-center mx-4 mt-[1.5px]'>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
