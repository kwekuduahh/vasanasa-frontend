import Image from "next/image";
import StatsCard from "@/components/StatsCard";
import { BlurFade } from "@/components/magicui/blur-fade";

interface StatItem {
    number: number;
    label: string;
    description: string;
}

const stats: StatItem[] = [
    {
        number: 5000,
        label: "Trainees",
        description: "New strategies and tactics that lead to growing sales"
    },
    {
        number: 80,
        label: "Clients",
        description: "New strategies and tactics that lead to growing sales"
    },
    {
        number: 8,
        label: "Programmes",
        description: "New strategies and tactics that lead to growing sales"
    },
    {
        number: 35,
        label: "Years of Experience",
        description: "New strategies and tactics that lead to growing sales"
    }
];

export default function Statistics() {
    return (
        <section className="w-full bg-[#f2f1fd]">
            <div className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center w-full Container">
                    <div className="col-span-1 flex flex-col gap-8 w-full py-10 sm:py-16 lg:py-20 pr-0 lg:pr-8">
                        <div className="flex flex-col md:grid md:grid-cols-2 justify-start items-start lg:items-center w-full gap-4">
                            {stats.map((stat, index) => {
                                return (<BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px" key={index}>
                                    <StatsCard stats={stat} />
                                </BlurFade>)
                            })}
                        </div>
                    </div>
                    <div className="col-span-1 w-full h-full">
                        <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px" className="w-full h-full">
                            <Image
                                src="/images/BusinessStatsImage.png"
                                alt="Professional training"
                                width={1000}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                        </BlurFade>
                    </div>
                </div>
            </div>
        </section>
    );
}
