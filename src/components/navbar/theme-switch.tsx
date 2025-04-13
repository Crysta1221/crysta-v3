"use client";
import { useState } from "react";
import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant='ghost'
        className='rounded-full size-9 border-none hover:bg-neutral-100/70 hover:dark:bg-neutral-700'>
        <span className='opacity-0'>
          <Sun size={24} />
        </span>
      </Button>
    );
  }

  return (
    <Button
      variant='ghost'
      className='rounded-full size-9 border-none hover:bg-neutral-100/70 hover:dark:bg-neutral-700'
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}>
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
          key={resolvedTheme}>
          {resolvedTheme === "dark" ? <Moon size={24} /> : <Sun size={24} />}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
