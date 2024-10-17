"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsSearch, BsList } from "react-icons/bs"; 

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    return (
        <header className="bg-black py-4 px-4 lg:px-10 flex items-center justify-between relative">
            <div className=" text-lime-600 text-3xl font-serif font-bold mr-4">
                <Link href="/">Footwear</Link>
            </div>
            <div className="lg:hidden">
                <BsList 
                    className="text-white cursor-pointer" 
                    size={30} 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                />
            </div>

            <nav className="hidden lg:flex items-center justify-between w-full">
                <ul className="flex space-x-8 font-bold text-white">
                    <li className="mx-4"><Link href="/men">Men</Link></li>
                    <li><Link href="/women">Women</Link></li>
                    <li><Link href="/arrivals">New Arrivals</Link></li>
                    <li><Link href="/sales">Sales Item</Link></li>
                    <li><Link href="/accessories">Accessories</Link></li>
                </ul>

                <div className="relative">
                    <input 
                        className="border border-gray-200 p-2 rounded-full w-40 lg:w-72 focus:outline-none focus:ring-2 focus:ring-gray-300 text-black"
                        type="text" 
                        placeholder="Search..."
                    />
                    <BsSearch className="absolute right-3 top-3 text-gray-400" size={18} />
                </div>
            </nav>

            {isMenuOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-black text-white z-10">
                    <ul className="flex flex-col items-center space-y-5 py-5 font-bold">
                        <li><Link href="/men" onClick={() => setIsMenuOpen(false)}>Men</Link></li>
                        <li><Link href="/women" onClick={() => setIsMenuOpen(false)}>Women</Link></li>
                        <li><Link href="/arrivals" onClick={() => setIsMenuOpen(false)}>New Arrivals</Link></li>
                        <li><Link href="/sales" onClick={() => setIsMenuOpen(false)}>Sales Item</Link></li>
                        <li><Link href="/accessories" onClick={() => setIsMenuOpen(false)}>Accessories</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Navbar;
