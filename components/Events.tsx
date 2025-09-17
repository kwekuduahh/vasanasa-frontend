import Image from "next/image";
import LinkButton from "./ui/LinkButton";
import EventCard from "./EventCard";
import { BlurFade } from "./magicui/blur-fade";

export default function Events() {

    const events = [
        {
            title: "New strategies and tactics that lead to growing sales",
            date: "26th, Mar 2025",
            time: "10:00 AM",
            location: "Accra International Conference Center",
        },
        {
            title: "New strategies and tactics that lead to growing sales",
            date: "26th, Mar 2025",
            time: "10:00 AM",
            location: "Accra International Conference Center",
        },

        {
            title: "New strategies and tactics that lead to growing sales",
            date: "26th, Mar 2025",
            time: "10:00 AM",
            location: "Accra International Conference Center",
        },

    ]

    return (
        <section className="w-full bg-[#1d49a8] relative">
            <div className="absolute inset-0 flex justify-center items-center w-full">
                <div className="flex justify-center items-center w-full h-full overflow-hidden">
                    <Image src="/images/img_swatch.png" alt="swatch" width={600} height={600} />
                    <Image src="/images/img_swatch.png" alt="swatch" width={600} height={600} />
                    <Image src="/images/img_swatch_482x482.png" alt="swatch" width={600} height={600} />
                </div>
            </div>
            <div className="relative z-10 w-full Container">
                <div className="flex flex-col gap-12 justify-start items-center py-5 sm:py-8 lg:py-14">
                    <div className="flex flex-col lg:flex-row justify-center items-center w-full">
                        <div className="flex flex-col gap-1 justify-center items-start w-full lg:flex-1 mb-6 lg:mb-0">
                            <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px" className="w-full">
                                <span className="text-[11px] sm:text-[11.5px] lg:text-[12px] font-rubik font-semibold leading-[13px] sm:leading-[14px] lg:leading-[15px] text-left text-[#f9ae17] uppercase">
                                    Upcoming events
                                </span>
                                <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-sora font-semibold leading-[30px] sm:leading-[35px] lg:leading-[40px] text-left text-[#f1f1f1] w-full lg:w-[52%]">
                                    Strengthen Your Skills at Our Workshops
                                </h2>
                            </BlurFade>
                        </div>
                        <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px">
                            <LinkButton href="/workshops" className="bg-[#f2f1fd] text-vasanasa-blue">
                                View Workshops
                            </LinkButton>
                        </BlurFade>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-[48px] justify-center items-center w-full">
                        <div className="flex flex-col gap-7 w-full lg:w-7/12">
                            {events.map((event, index) => {
                                return (
                                    <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px" key={index}>
                                        <EventCard
                                            key={index}
                                            title={event.title}
                                            date={event.date}
                                            location={event.location}
                                            index={index + 1}
                                        />
                                    </BlurFade>
                                )
                            })}
                        </div>
                        <div className="flex justify-center items-center w-auto h-auto rounded-md p-1">
                            <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px">
                                <Image
                                    src="/images/EventsImage.png"
                                    alt="Workshop event"
                                    width={1000}
                                    height={800}
                                    className="w-full h-full rounded-[8px] object-cover"
                                />
                            </BlurFade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

