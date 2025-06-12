"use client";

import { Globe } from "../magicui/globe";

export const LandingSection = () => {
  return (
    <section className='relative w-full py-20 px-6 sm:px-8 lg:px-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-6 md:gap-12 lg:gap-16'>
          {/* Right side - Animated Earth (first on mobile) */}
          <div className='order-1 lg:order-2 flex justify-center lg:justify-end lg:w-1/2'>
            <div className='w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96'>
              <Globe className='w-full h-full' />
            </div>
          </div>

          {/* Left side - Text content (second on mobile) */}
          <div className='order-2 lg:order-1 text-center lg:text-left lg:w-1/2'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-gray-200 leading-tight'>
              Welcome to{" "}
              <span className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>
                CrystaWorld
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
