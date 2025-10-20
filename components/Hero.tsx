import LinkButton from "@/components/ui/LinkButton";
import { BlurFade } from "./magicui/blur-fade";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/app/sanity/live";

interface HeroProps {
    title?: string;
    caption?: string;
};

const HERO_QUERY = defineQuery(`*[_type == "landingPage"]{
  heroSection
}[0]`);


export default async function Hero() {

    const hero = await sanityFetch({ query: HERO_QUERY });
    return (
        <section className="w-full bg-[#ffffff] relative">
            <div
                className={`w-full bg-cover bg-center bg-no-repeat`}
                style={{ backgroundImage: `url('/images/HeroImage.png')` }}
            >
                <div className="w-full Container sm:px-4 lg:px-0 py-[95px] sm:py-[140px] lg:py-[190px]">
                    <div className="flex flex-col lg:flex-row justify-start items-center w-full">
                        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 justify-start items-start w-full lg:w-[46%] px-4">
                            <div className="text-2xl md:text-3xl lg:text-5xl font-sora font-semibold leading-7 md:leading-9 lg:leading-11 text-left text-[#272865] w-full">
                                <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"}>
                                    <h1 className="text-left text-[#272865]">
                                        Train with <span className="italic">Purpose</span>,<br />
                                        Lead with <span className="text-vasanasa-yellow">Confidence</span>
                                    </h1>
                                </BlurFade>
                            </div>
                            <div className="text-sm md:text-base lg:text-lg font-rubik font-normal leading-4 md:leading-5 lg:leading-6 text-left text-[#0000007a] w-full max-w-[13.2rem] md:max-w-[16.4rem]">
                                <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} delay={0.1}>
                                    <p className="text-left text-[#0000007a]">
                                        {hero.data.heroSection.heroBody}
                                    </p>
                                </BlurFade>
                            </div>
                            <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} delay={0.13}>
                                <LinkButton href={hero.data.heroSection.ctaSlug.current} iconName="arrow-right" iconClassName="w-6 h-6 stroke-white" className="bg-vasanasa-blue text-[#f2f1fd]">
                                    Register
                                </LinkButton>
                            </BlurFade>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
