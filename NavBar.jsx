// NavBar.jsx
import React from 'react';

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 border-b border-zinc-900 backdrop-blur-sm uppercase tracking-widest text-xs font-mono">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Brand Logo / Identifier */}
                <div className="text-white font-bold tracking-[0.3em]">
                    <span className="text-red-700 mr-2">///</span>
                    UMBRA_LAB
                </div>

                {/* Technical Navigation Links */}
                <div className="hidden md:flex space-x-8 text-zinc-500">
                    <a href="#mission" className="hover:text-white hover:border-b-2 hover:border-red-700 pb-1 transition-all duration-150">
                        <span className="text-red-800 mr-1">01_</span>MISSION
                    </a>
                    <a href="#lab" className="hover:text-white hover:border-b-2 hover:border-red-700 pb-1 transition-all duration-150">
                        <span className="text-red-800 mr-1">02_</span>LAB
                    </a>
                    <a href="#gear" className="hover:text-white hover:border-b-2 hover:border-red-700 pb-1 transition-all duration-150">
                        <span className="text-red-800 mr-1">03_</span>GEAR
                    </a>
                    <a href="#intake" className="hover:text-white hover:border-b-2 hover:border-red-700 pb-1 transition-all duration-150">
                        <span className="text-red-800 mr-1">04_</span>INTAKE
                    </a>
                </div>

                {/* Mobile Menu Toggle (Placeholder) */}
                <div className="md:hidden text-zinc-500 hover:text-white cursor-pointer">
                    [ MENU ]
                </div>
            </div>
        </nav>
    );
};

export default NavBar;