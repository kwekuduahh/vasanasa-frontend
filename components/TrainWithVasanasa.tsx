import Image from "next/image";
import LinkButton from "./ui/LinkButton";
import { BlurFade } from "./magicui/blur-fade";

export default function TrainWithVasanasa() {
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
                <div className="flex flex-col lg:flex-row justify-center items-center w-full">
                    <div className="flex flex-col gap-[12px] justify-center items-start w-full lg:flex-1 mb-8 lg:mb-0">
                        <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px">
                            <span className="text-sm font-rubik font-semibold leading-2 text-left text-[#f9ae17] uppercase">
                                train with vasanasa
                            </span>
                            <p className="text-sm sm:text-base lg:text-lg font-sora font-normal leading-2 text-left text-[#ffffff] w-full lg:w-[60%]">
                                Learn The Exact Steps To Set up, Grow And Scale Highly Successful Business Ideas
                            </p>
                        </BlurFade>
                    </div>
                    <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px">
                        <LinkButton href="/register" iconName="arrow-right" iconClassName="w-6 h-6 stroke-vasanasa-blue" className="bg-[#f2f1fd] text-vasanasa-blue">
                            Register
                        </LinkButton>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
}
