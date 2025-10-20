import Image from 'next/image'
import LinkButton from '@/components/ui/LinkButton'
import { BlurFade } from '@/components/magicui/blur-fade'
import WorkshopCard from '@/components/WorkshopCard'

export default function Workshops() {
    const workshops = [
        {
            id: "/communication",
            title: "Communication",
            category: "Communication",
            description: "Communication & Change Management"
        },
        {
            id: "/management",
            title: "Management",
            category: "Management",
            description: "Time Management & Productivity Training"
        },
        {
            id: "/stress-management",
            title: "Stress Management",
            category: "Stress Management",
            description: "Stress Management & Work-Life Balance"
        },
        {
            id: "/media-interviews",
            title: "Media Interviews",
            category: "Media Interviews",
            description: "Media Interviews & Crisis Communication"
        },
    ]
    return (
        <section className="w-full bg-[#f2f1fd] py-[30px] sm:py-[45px] lg:py-[60px] px-4 sm:px-6 lg:px-[56px]">
            <div className="w-full max-w-[1240px] mx-auto">
                <div className="flex flex-col gap-[48px] justify-center items-center">
                    <div className="flex flex-col gap-[12px] justify-center items-center w-full lg:w-[44%]">
                        <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px">
                            <span className="text-sm font-rubik font-semibold leading-2 text-left text-[#f9ae17] uppercase">
                                Workshops
                            </span>
                        </BlurFade>
                        <div className="flex flex-col gap-[8px] justify-start items-center w-full">
                            <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-sora font-semibold leading-2 text-center text-[#272865] w-full">
                                    Transforming Businesses Through Strategic Communication
                                </h2>
                            </BlurFade>
                            <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px">
                                <p className="text-sm font-rubik font-normal leading-2 text-center text-[#0000007a] w-full">
                                    Effective communication drives growth, strengthens relationships and creates a lasting business impact. Explore
                                </p>
                            </BlurFade>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-[48px] justify-center items-center w-full lg:w-[74%]">
                        <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px" className="relative w-full lg:w-[38%] hidden lg:block">
                            <Image
                                src="/images/workshopImage.png"
                                alt="Workshop"
                                width={1000}
                                height={800}
                                className="mx-auto my-auto object-cover hidden lg:block"
                            />
                        </BlurFade>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:flex-1">
                            {workshops.map((workshop, index) => (
                                <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px" key={index}>
                                    <WorkshopCard
                                        key={index}
                                        title={workshop.title}
                                        category={workshop.category}
                                        description={workshop.description}
                                        id={workshop.id}
                                    />
                                </BlurFade>
                            ))}
                        </div>
                    </div>
                    <BlurFade duration={0.5} direction="up" inView={true} blur={"10px"} inViewMargin="10px">
                        <LinkButton href="/workshops" iconName="arrow-right" iconClassName="w-6 h-6 stroke-white" className="bg-vasanasa-blue text-[#f2f1fd]">
                            View All
                        </LinkButton>
                    </BlurFade>
                </div>
            </div>
        </section>
    )
}
