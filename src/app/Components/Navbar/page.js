'use client';
import { useState } from 'react';
import { FiMenu, FiX, FiLogIn } from 'react-icons/fi';
import { FaAngleDown } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50 py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    <div className="flex items-center space-x-2">
                        <Image
                            src="/Logo.svg"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="h-15 w-25"
                        />

                    </div>

                    <div className="hidden lg:flex items-center space-x-6 font-medium">
                        <div className="flex items-center space-x-1 cursor-pointer">
                            <span>PROGRAMS</span>
                            <FaAngleDown size={12} />
                        </div>
                        <span className="text-orange-500 cursor-pointer">HIRE FROM US</span>
                        <span className="cursor-pointer">ALUMNI</span>
                        <div className="flex items-center space-x-1 cursor-pointer">
                            <span>EXPLORE MORE</span>
                            <FaAngleDown size={12} />
                        </div>
                    </div>

                    <div className="hidden lg:flex">
                        <button className="text-orange-500 border border-orange-500 rounded-full px-4 py-1 flex items-center space-x-1 hover:bg-orange-50">
                            <span>LOGIN</span>
                            <FiLogIn />
                        </button>
                    </div>

                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="lg:hidden bg-white absolute right-0 w-64 shadow-lg z-40 p-4">
                    <div className="flex flex-col space-y-4 text-sm font-medium">
                        <div className="flex items-center justify-between cursor-pointer">
                            <span>PROGRAMS</span>
                            <FaAngleDown size={12} />
                        </div>
                        <span className="text-orange-500 cursor-pointer">HIRE FROM US</span>
                        <span className="cursor-pointer">ALUMNI</span>
                        <div className="flex items-center justify-between cursor-pointer">
                            <span>EXPLORE MORE</span>
                            <FaAngleDown size={12} />
                        </div>
                        <button className="mt-4 text-orange-500 border border-orange-500 rounded-full px-4 py-1 flex items-center space-x-1 justify-center hover:bg-orange-50">
                            <span>LOGIN</span>
                            <FiLogIn />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}



export default Navbar;




