import Image from "next/image";
import LinkButton from "@/components/ui/LinkButton";
import { BlurFade } from "./magicui/blur-fade";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/app/sanity/live";
import { urlFor } from "@/app/sanity/image";

const ABOUT_SECTION_QUERY = defineQuery(`*[_type == "landingPage"]{
  founderQuoteSection,
}[0]`);

export default async function AboutSection() {

    const aboutSection = await sanityFetch({ query: ABOUT_SECTION_QUERY });

    const imageUrl = urlFor(aboutSection.data.founderQuoteSection.founderImage.asset).url();
    return (
        <section className="w-full bg-[#ffffff] py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="w-full Container">
                <div className="flex flex-col lg:flex-row justify-center items-start w-full gap-8 lg:gap-0">
                    <div>
                        <BlurFade duration={0.5} direction="up" inView={true} inViewMargin="10px" blur={"10px"} className="flex flex-row justify-start items-center w-auto">
                            <Image src="/images/img_frame_6.svg" alt="frame" width={8} height={26} className="w-auto h-auto" />
                            <span className="text-sm font-rubik font-semibold leading-2 text-left text-[#f9ae17] uppercase ml-2">
                                About Us
                            </span>
                        </BlurFade>
                    </div>
                    <div className="flex flex-col gap-3 justify-start items-start w-full lg:w-auto lg:flex-1 lg:ml-[91px]">
                        <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px">
                            <p className="text-xl md:text-xl lg:text-2xl font-sora font-normal leading-6 md:leading-7 lg:leading-8 text-left text-[#272865] w-full lg:w-[80%]">
                                {`"${aboutSection.data.founderQuoteSection.quote}"`}
                            </p>
                            <div className="flex gap-3 justify-start items-center w-full mt-1">
                                <Image
                                    src={imageUrl}
                                    alt="Monica Korkor Bleboo"
                                    width={48}
                                    height={48}
                                    className="rounded-[24px]"
                                />
                                <div className="flex flex-col gap-[4px] justify-start items-start">
                                    <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-rubik font-medium leading-[17px] sm:leading-[18px] lg:leading-[20px] text-left text-[#040404]">
                                        {aboutSection.data.founderQuoteSection.name}
                                    </span>
                                    <span className="text-[11px] sm:text-[11.5px] lg:text-[12px] font-rubik font-medium leading-[13px] sm:leading-[14px] lg:leading-[15px] text-left text-[#7d7d7d]">
                                        {aboutSection.data.founderQuoteSection.roleTitle}
                                    </span>
                                </div>
                            </div>
                        </BlurFade>
                    </div>
                    <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px">
                        <LinkButton href="/about-us" iconName="arrow-right" iconClassName="w-6 h-6 stroke-white" className="bg-vasanasa-blue text-[#f2f1fd]">
                            Read More
                        </LinkButton>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
}
