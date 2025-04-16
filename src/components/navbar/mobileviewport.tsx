"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import crystaImage from "@/assets/images/crysta.jpeg";
import { ModeToggle } from "./theme-switch";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { links } from "./index";
import { Button } from "@/components/ui/button";

type NavLink = {
  name: string;
  href: string;
};

type MobileViewportProps = {
  links: NavLink[];
};

export const MobileViewport = ({ links }: MobileViewportProps) => {
  const pathname = usePathname();
  const [selectedLink, setSelectedLink] = useState(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setSelectedLink(pathname);
  }, [pathname]);
  return (
    <>
      <div className='relative flex w-full items-center rounded-full dark:border p-1.5 md:hidden mx-3 bg-slate-500 dark:bg-[#252525] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 z-20'>
        <div className='flex items-center mx-4 gap-2'>
          <Image
            src={crystaImage}
            alt='Crysta'
            width={40}
            height={40}
            className='rounded-full'
          />
        </div>{" "}
        <div className='flex grow' />{" "}
        <div className='flex items-center mx-4 mt-[1.5px] gap-3'>
          <ModeToggle />
          <Button
            variant='ghost'
            className='border rounded-full size-8 z-30'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}>
            <AnimatePresence initial={false} mode='wait'>
              {isMenuOpen ? (
                <motion.div
                  key='close'
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}>
                  <X className='h-5 w-5' />
                </motion.div>
              ) : (
                <motion.div
                  key='menu'
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}>
                  <Menu className='h-5 w-5' />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>{" "}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className='fixed inset-0 bg-white dark:bg-black z-40'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            {" "}
            <div className='mx-auto max-w-5xl pt-5'>
              <div className='mx-auto flex w-full items-center justify-center'>
                <div className='relative flex w-full items-center rounded-full border-0 p-1.5 mx-3'>
                  <div className='flex items-center mx-4 gap-2'>
                    <Image
                      src={crystaImage}
                      alt='Crysta'
                      width={40}
                      height={40}
                      className='rounded-full'
                    />
                  </div>
                  <div className='flex grow' />{" "}
                  <div className='flex items-center mx-4 mt-[1.5px] gap-3'>
                    <ModeToggle />
                    <Button
                      variant='ghost'
                      className='border rounded-full size-8'
                      onClick={() => setIsMenuOpen(false)}
                      aria-label='メニューを閉じる'>
                      <X className='h-5 w-5' />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-10'>
              <p className='text-muted-foreground text-xs'>MENU</p>
              <div className='py-2 flex flex-col gap-5 mt-2'>
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setSelectedLink(link.href);
                      setIsMenuOpen(false);
                    }}
                    className={`text-sm font-medium transition-colors duration-200 ease-in-out ${
                      selectedLink === link.href
                        ? "text-green-600 dark:text-green-500"
                        : "text-black dark:text-white hover:text-primary"
                    }`}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
