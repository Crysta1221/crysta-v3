"use client";

import Link from "next/link";
import { Github, Twitter, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const topPage = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Works", href: "/works" },
    { name: "News", href: "/news" },
    { name: "About", href: "/about" },
  ];

  const Products = [{ name: "Coming Soon", href: "#" }];

  const resourceLinks = [
    { name: "Docs", href: "/docs" },
    { name: "Community", href: "/community" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Crystaworld", label: "GitHub" },
    {
      icon: Twitter,
      href: "https://twitter.com/Crystaworld",
      label: "Twitter",
    },
  ];

  return (
    <footer className='bg-white dark:bg-[#101010] w-full overflow-x-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16'>
        {/* Main footer content */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8'>
          {/* Brand section */}
          <div className='lg:col-span-2'>
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-8 h-8 bg-gradient-to-br from-fuchsia-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg'>
                <span className='text-white font-bold text-sm'>C</span>
              </div>
              <span className='text-xl font-bold text-[#101010] dark:text-white'>
                CrystaWorld
              </span>
            </div>
            <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md mb-6'>
              Crystaworld aims to be a service that anyone can use freely and
              for free.
            </p>

            {/* Social links */}
            <div className='flex space-x-2'>
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-lg bg-gray-100 dark:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-600 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:scale-105'
                  aria-label={social.label}>
                  <social.icon className='w-4 h-4' />
                </Link>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className='text-sm font-semibold text-gray-900 dark:text-white mb-4 tracking-wide'>
              Page
            </h3>
            <ul className='space-y-3'>
              {topPage.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className='text-sm font-semibold text-gray-900 dark:text-white mb-4 tracking-wide'>
              Products
            </h3>
            <ul className='space-y-3'>
              {Products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className='text-sm font-semibold text-gray-900 dark:text-white mb-4 tracking-wide'>
              Resources
            </h3>
            <ul className='space-y-3'>
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className='mt-16 pt-8 border-t border-gray-200 dark:border-gray-800'>
          <div className='flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0'>
            <div className='flex flex-wrap items-center justify-center md:justify-start gap-1 text-sm text-gray-600 dark:text-gray-400'>
              <span>© {currentYear} Crystaworld. All rights reserved. </span>
            </div>
            <div className='flex flex-wrap justify-center md:justify-end gap-4 lg:gap-6'>
              <Link
                href='/privacy'
                className='text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 whitespace-nowrap'>
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 whitespace-nowrap'>
                Terms of Service
              </Link>
              <Link
                href='/cookies'
                className='text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 whitespace-nowrap'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
