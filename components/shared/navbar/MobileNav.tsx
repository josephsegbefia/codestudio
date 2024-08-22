'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { navbarLinks } from '@/constants';
import { usePathname } from 'next/navigation';

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className='flex h-full flex-col gap-6 pt-16'>
      {navbarLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;
        return (
          <SheetClose asChild key={link.route}>
            <Link href={link.route} className='flex items-center gap-5'>
              <Image
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
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
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src='/assets/icons/hamburger.svg'
          width={36}
          height={36}
          alt='hamburger menu'
          className='sm:hidden'
        />
      </SheetTrigger>
      <SheetContent side='left' className='bg-primary-500 border-none'>
        <Link href='/' className='flex items-center'>
          <p className='text-lg text-white font-spaceGrotesk'>
            Joseph Segbefia
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
