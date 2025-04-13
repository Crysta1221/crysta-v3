"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const PageHeading: React.FC<PageHeadingProps> = ({
  title,
  subtitle,
  className,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // より魅力的なアニメーション効果を追加
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      className={cn("mb-10 relative text-left", className)}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 0.1, 0.05],
          scale: 1,
          transition: { duration: 1.5, ease: "easeOut" },
        }}
        className='absolute -left-10 -right-10 -top-5 -bottom-5 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-full blur-3xl -z-10'
      />{" "}
      <div className='relative inline-block'>
        <motion.div
          initial={{ width: 0, opacity: 0.8 }}
          animate={{
            width: "calc(100% + 12px)",
            left: "-4px",
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className='h-[2px] bg-primary absolute bottom-0'
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className='text-2xl md:text-3xl font-bold tracking-tight relative z-10 pb-2 text-primary'>
          {title}
        </motion.h1>
      </div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.7,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className='text-muted-foreground mt-3 max-w-2xl text-lg'>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
