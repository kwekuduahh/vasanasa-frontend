'use client';
import React from 'react';
import LinkButton from './ui/LinkButton';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-[#1d49a8] mt-1 py-1">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[110px]">
                <div className="flex flex-col gap-[38px] justify-center items-center mt-[41px] sm:mt-[61px] lg:mt-[82px] mb-4">
                    {/* Call to Action Section */}
                    <div className="flex flex-col sm:flex-row justify-between items-center w-full bg-[#ffffff] rounded-[12px] px-4 sm:px-6 py-4 shadow-[0px_4px_24px_#00000019]">
                        <div className="flex justify-start items-center mb-4 sm:mb-0">
                            <span className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-semibold leading-[20px] sm:leading-[24px] lg:leading-[26px] text-left text-[#1d49a8]">
                                Enhance Your Skills & Elevate Your Career Today!
                            </span>
                        </div>
                        <LinkButton href="/register" className="text-[#f2f1fd] bg-vasanasa-blue">
                            Register
                        </LinkButton>
                    </div>

                    {/* Footer Content */}
                    <div className="flex flex-col lg:flex-row justify-between items-start w-full mr-0 lg:mr-5">
                        {/* Logo Section */}
                        <div className="flex gap-[6px] justify-center items-center w-full lg:w-auto mb-8 lg:mb-0">
                            <Image src="/images/White-Logo.png" alt="Vasanasa logo" width={150} height={150} />
                        </div>

                        {/* Links and Contact */}
                        <div className="flex flex-col sm:flex-row justify-between items-start w-full lg:w-auto gap-8 sm:gap-16">
                            {/* Quick Links */}
                            <div className="flex flex-col gap-[6px] justify-start items-start w-full sm:w-auto">
                                <span className="text-[12px] font-rubik font-medium leading-[15px] text-left text-[#f9ae17] mb-2">
                                    Quick Links
                                </span>
                                <div className="flex flex-col gap-[12px] justify-start items-start">
                                    <Link href="/"
                                        role="menuitem"
                                        className={`text-sm font-medium leading-5 text-center text-[#f1f1fd] hover:text-vasanasa-yellow transition-colors`}
                                    >
                                        Home
                                    </Link>
                                    <Link href="/workshops"
                                        role="menuitem"
                                        className={`text-sm font-medium leading-5 text-center text-[#f1f1fd] hover:text-vasanasa-yellow transition-colors`}
                                    >
                                        Workshops
                                    </Link>
                                    <Link href="/about-us"
                                        role="menuitem"
                                        className="text-sm font-medium leading-5 text-center text-[#f1f1fd] hover:text-vasanasa-yellow transition-colors"
                                    >
                                        About Us
                                    </Link>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="flex flex-col gap-[6px] justify-start items-start w-full sm:w-auto">
                                <span className="text-[12px] font-rubik font-medium leading-[15px] text-left text-[#f9ae17] mb-2">
                                    Contact Info
                                </span>
                                <div className="flex flex-col gap-[12px] justify-center items-start">
                                    <span className="text-[16px] font-rubik font-normal leading-[20px] text-left text-[#ffffff]">
                                        233 Castle Road, Accra
                                    </span>
                                    <span className="text-[16px] font-rubik font-normal leading-[20px] text-left text-[#ffffff]">
                                        +233 (0) 55 234 5678
                                    </span>
                                    <span className="text-[16px] font-rubik font-normal leading-[20px] text-left text-[#ffffff]">
                                        talk2us@vasanasa.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="flex justify-center items-center w-full Container py-2.5">
                    <div className="flex flex-col sm:flex-row gap-8 justify-between items-center w-full">
                        <div className="flex justify-start items-center w-full py-2.5">
                            <span className="text-[14px] font-inter font-normal leading-[18px] text-left text-[#d6d6d6]">
                                ©2025 Vasanasa
                            </span>
                        </div>
                        <div className="flex justify-end items-center w-full py-2">
                            <span className="text-[14px] font-inter font-normal leading-[18px] text-right text-[#d6d6d6]">
                                All rights reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;