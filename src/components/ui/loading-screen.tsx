"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  isLoading: boolean;
  progress: number;
}

export const LoadingScreen = ({ isLoading, progress }: LoadingScreenProps) => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Welcome to Crystaworld";

  useEffect(() => {
    if (isLoading) {
      const textProgress = Math.floor((progress / 100) * fullText.length);
      setDisplayText(fullText.slice(0, textProgress));
    }
  }, [progress, isLoading]);

  return (
    <AnimatePresence mode='wait'>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className='fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800'>
          <div className='flex flex-col items-center space-y-8'>
            {/* Logo with rotation animation */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className='w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-2xl'>
              <span className='text-white font-bold text-2xl'>C</span>
            </motion.div>

            {/* Welcome text without typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, duration: 0.8 },
              }}
              className='text-center'>
              <h1 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent mb-2'>
                {displayText}
              </h1>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>
                Loading your experience...
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.5 },
              }}
              className='w-64 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden'>
              <motion.div
                className='h-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full'
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>

            {/* Progress percentage */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.2, duration: 0.5 },
              }}
              className='text-sm text-gray-500 dark:text-gray-400 font-medium'>
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
