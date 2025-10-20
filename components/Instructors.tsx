import Image from "next/image";
import { BlurFade } from "./magicui/blur-fade";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/app/sanity/live";
import { urlFor } from "@/app/sanity/image";


const INSTRUCTORS_QUERY = defineQuery(`*[_type == "landingPage"]{
  instructorsSection
}[0]`)

export default async function Instructors() {

    const instructors = await sanityFetch({ query: INSTRUCTORS_QUERY })
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
                        {
                            instructors.data.instructorsSection.instructors.map((instructor: any, index: number) => (
                                <BlurFade key={index} duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px" className="flex flex-col gap-[10px] justify-start items-center w-full sm:w-[308px]">
                                    <div className="flex justify-center items-start w-full">
                                        <Image
                                            src={urlFor(instructor.instructorImage.asset).url()}
                                            alt={instructor.instructorTitle}
                                            width={300}
                                            height={200}
                                            className="w-full rounded-[8px]"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-full">
                                        <span className="text-xs font-rubik font-normal leading-2 text-left text-[#bdcef3]">
                                            {instructor.instructorTitle}
                                        </span>
                                        <span className="text-sm sm:text-base lg:text-lg font-rubik font-medium leading-2 text-left text-[#f1f1f1]">
                                            {instructor.instructorName}
                                        </span>
                                    </div>
                                </BlurFade>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section >
    );
}
