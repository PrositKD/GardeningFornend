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
           
           
           <Navigation></Navigation>
           <div  className="min-h-screen bg-gray-300  "> {/* Set background color */}
                <div className="background max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Set content container */}
                    <main>{children}</main>
                </div>
            </div>


            <Footer></Footer>
        </>
    );
}
