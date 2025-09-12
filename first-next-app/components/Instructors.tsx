import Image from "next/image";
import { BlurFade } from "./magicui/blur-fade";

export default function Instructors() {
    const instructors = [
        {
            name: "Monica Korkor Bleboo",
            role: "CEO, Lead Instructor",
            image: "https://ext.same-assets.com/1979085349/2255628922.png"
        },
        {
            name: "Peter Amartey Agbeko, APR",
            role: "CEO, Lead Instructor",
            image: "https://ext.same-assets.com/1979085349/1195462709.png"
        }
    ];

    return (
        <section className="w-full bg-[#1d49a8] relative">
            <div className="absolute inset-0 flex justify-center items-center w-full">
                <div className="flex justify-center items-center w-full overflow-hidden">
                    <Image src="/images/img_swatch.png" alt="swatch" width={482} height={482} />
                    <Image src="/images/img_swatch.png" alt="swatch" width={482} height={482} />
                    <Image src="/images/img_swatch_482x482.png" alt="swatch" width={482} height={482} />
                </div>
            </div>
            <div className="relative z-10 w-full Container py-10 sm:py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row justify-between items-start w-full">
                    <div>
                        <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px" className="flex flex-row justify-start items-center w-auto mb-8 lg:mb-0">
                            <Image src="/images/img_frame_6.svg" alt="frame" width={8} height={26} className="w-auto h-auto" />
                            <span className="text-sm font-rubik font-semibold leading-2 text-left text-[#f9ae17] uppercase ml-[10px]">
                                Accredited Instructors
                            </span>
                        </BlurFade>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-[16px] w-full lg:w-[48%] lg:ml-[131px]">
                        <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px" className="flex flex-col gap-[10px] justify-start items-center w-full sm:w-[308px]">
                            <div className="flex justify-center items-center w-auto">
                                <Image
                                    src="/images/monica-small.png"
                                    alt="Monica Korkor Bleboo"
                                    width={300}
                                    height={200}
                                    className="w-full rounded-[8px]"
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start w-full">
                                <span className="text-xs font-rubik font-normal leading-2 text-left text-[#bdcef3]">
                                    CEO, Lead Instructor
                                </span>
                                <span className="text-sm sm:text-base lg:text-lg font-rubik font-medium leading-2 text-left text-[#f1f1f1]">
                                    Monica Korkor Bleboo
                                </span>
                            </div>
                        </BlurFade>
                        <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px" className="flex flex-col gap-[10px] justify-start items-center w-full sm:w-[308px]">
                            <div className="flex justify-center items-center w-auto">
                                <Image
                                    src="/images/peter-small.png"
                                    alt="Peter Amartey Agbeko"
                                    width={300}
                                    height={200}
                                    className="w-full rounded-[8px]"
                                />
                            </div>
                            <div className="flex flex-col gap-[2px] justify-center items-start w-full">
                                <span className="text-xs font-rubik font-normal leading-2 text-left text-[#bdcef3]">
                                    Communication Specialist, Instructor
                                </span>
                                <span className="text-sm sm:text-base lg:text-lg font-rubik font-medium leading-2 text-left text-[#f1f1f1]">
                                    Peter Amartey Agbeko, APR
                                </span>
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </section>
    );
}
