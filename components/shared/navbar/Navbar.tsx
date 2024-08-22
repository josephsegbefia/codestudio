'use client';
import React from 'react';
import MobileNav from './MobileNav';
import { navbarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className='z-10 w-full relative p'>
      <nav className='flex flex-between items-center bg-primary-500 px-10 py-5'>
        <Link href='/'>
          {/* <Image src='' alt='logo' width={100} height={30} /> */}
          <p className='text-lg text-white font-spaceGrotesk'>
            Joseph Segbefia
          </p>
        </Link>
        <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden px-10'>
          {navbarLinks.map((link) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;
            return (
              <li key={link.label} className='text-white flex'>
                <Link
                  href={link.route}
                  className='flex flex-1 gap-2 items-center hover:text-primary-200'
                >
                  <Image
                    src={link.imgURL}
                    width={32}
                    height={32}
                    alt={link.label}
                  />
                  <p
                    className={`${
                      isActive
                        ? 'border-b-2 border-white'
                        : 'flex items-center gap-2'
                    } flex items-center gap-2 font-spaceGrotesk text-lg `}
                  >
                    {link.label}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
        <MobileNav />
      </nav>
    </header>
  );
};

export default Navbar;
