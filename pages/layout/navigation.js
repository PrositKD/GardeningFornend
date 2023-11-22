import React, { useState } from 'react';
import Link from 'next/link';
import Modal from '../user/Modal';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <nav className="bg-blue-500 p-4 flex justify-between items-center">
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
{/* for pc view */}
        <div className="hidden sm:flex text-white text-lg mr-6">
          <Link href="/" className="ml-4 btn-ghost">Home</Link>
          <Link href="/user/indoor" className="ml-4 btn-ghost">Indoor</Link>
          <Link href="/parcel" className="ml-4 btn-ghost">Outdoor</Link>
          <Link href="/history" className="btn-ghost ml-4">Medicinal</Link>
          <Link href="/" className="btn-ghost ml-4">Herbs</Link>
          <Link href="/user/Products"className="btn-ghost ml-4">Products</Link>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search here"
            className="input input-bordered input-sm w-5/6 sm:w-5/6 bg-gray-300 "
          />

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src="/logo.jpg" alt="Avatar" width={40} height={40} />
              </div>
            </label>
            <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a href="#" onClick={openLoginModal}>Profile</a>
             </li> 
              <li>
                <Link href="/settings">Settings</Link>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="absolute top-14 left-0 mt-2 w-30 bg-gray-100 p-4 rounded-box shadow-lg sm:hidden">
          <Link href="/" className="btn-ghost text-gray-700 block py-2">Home</Link>
          <Link href="/user/indoor" className="btn-ghost text-gray-700 block py-2">Indoor</Link>
          <Link href="/parcel" className="btn-ghost text-gray-700 block py-2">Outdoor</Link>
          <Link href="/history" className="btn-ghost text-gray-700 block py-2">Medicinal</Link>
          <Link href="/" className="btn-ghost text-gray-700 block py-2">Herbs</Link>
          <Link href="/user/Products" className="btn-ghost text-gray-700 block py-2">Products</Link>
        </div>
      )}

      {isLoginModalOpen && (
        <Modal onClose={closeLoginModal} />
      )}
    </>
  );
}
