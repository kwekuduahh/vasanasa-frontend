'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import LinkButton from '@/components/ui/LinkButton';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-[#ffffff] px-4 py-2">
            <div className="w-full Container">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex gap-1 justify-center items-center w-auto h-auto">
                        <Image src="/images/Black-Logo.png" alt="logo" width={150} height={150} />
                    </div>

                    {/* Hamburger Menu Icon (Mobile only) */}
                    <button
                        className="block lg:hidden p-4"
                        aria-label="Open menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X className="w-6 h-6 stroke-vasanasa-blue" /> : <Menu className="w-6 h-6 stroke-vasanasa-blue" />}
                    </button>

                    {/* Navigation Menu */}
                    <nav className={`${menuOpen ? 'block' : 'hidden'} lg:flex absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50 lg:z-auto`}>
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 justify-center items-center p-4 lg:p-0">
                            <Link href="/"
                                onClick={() => setMenuOpen(false)}
                                role="menuitem"
                                className={`text-sm font-rubik font-medium leading-[20px] text-center text-vasanasa-blue hover:text-vasanasa-yellow transition-colors lg:block`}
                            >
                                Home
                            </Link>
                            <Link href="/workshops"
                                onClick={() => setMenuOpen(false)}
                                role="menuitem"
                                className={`text-sm font-rubik font-medium leading-[20px] text-center text-vasanasa-blue hover:text-vasanasa-yellow transition-colors lg:block`}
                            >
                                Workshops
                            </Link>
                            <Link href="/about-us"
                                onClick={() => setMenuOpen(false)}
                                role="menuitem"
                                className="text-sm font-rubik font-medium leading-[20px] text-center text-vasanasa-blue hover:text-vasanasa-yellow transition-colors"
                            >
                                About Us
                            </Link>
                            <LinkButton href="/contact-us" iconName="message-square" iconClassName="w-5 h-5 stroke-white" className="bg-vasanasa-blue text-[#f2f1fd]">
                                Let's Talk</LinkButton>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;