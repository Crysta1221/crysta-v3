"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant='ghost'
      className='rounded-full size-9 border md:border-none hover:bg-white hover:dark:bg-neutral-700'
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <AnimatePresence mode='wait' initial={false}>
        <motion.span
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            y: 15,
          }}
          transition={{
            type: "keyframes",
          }}
          key={theme}>
          {theme === "dark" ? <Moon size={24} /> : <Sun size={24} />}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
