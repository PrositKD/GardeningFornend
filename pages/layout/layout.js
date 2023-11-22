import React from 'react';
import Head from 'next/head';
import Navigation from './navigation';
import Footer from './footer';

export default function Layout({ children, page }) {
    return (
        <>
            <Head>
                <title>Tri_Gerdening-{page}</title>
            </Head>
           
            <div className="fixed w-full top-0 z-50">
               <Navigation />
           </div>

           <div className="min-h-screen mt-16 bg-gray-300">
               {/* Desktop view */}
               <div className="hidden sm:flex justify-center items-center">
                   <div className="max-w-6xl w-full px-4">
                       <main>{children}</main>
                   </div>
               </div>

               {/* Mobile view */}
               <div className="sm:hidden">
                   <div>
                       <main>{children}</main>
                   </div>
               </div>
           </div>

           <Footer />
        </>
    );
}
