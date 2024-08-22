import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='bg-primary-50 min-h-screen relative'>
      <Navbar />
      <section>
        <div>{children}</div>
      </section>
      Toaster
      <div>Footer</div>
    </main>
  );
};

export default Layout;
