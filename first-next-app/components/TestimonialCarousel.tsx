"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

interface Testimonial {
    id: number;
    TestimonialBody: string;
    PersonnelName: string;
    PersonnelRole: string;
}

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-md"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="w-full">
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="w-full">
                        <div className="flex flex-col gap-3 justify-center items-start w-full">
                            <p className="text-md sm:text-md lg:text-lg font-sora font-semibold leading-6 lg:leading-6 text-left text-[#272865] w-full">
                                {testimonial.TestimonialBody}
                            </p>
                            <div className="flex gap-3 justify-start items-center w-full">
                                <Image
                                    src="/images/bijou.jpeg"
                                    alt={testimonial.PersonnelName}
                                    width={48}
                                    height={48}
                                    className="rounded-[24px]"
                                />
                                <div className="flex flex-col gap-[4px] justify-start items-start self-end">
                                    <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-rubik font-medium leading-[17px] sm:leading-[18px] lg:leading-[20px] text-left text-[#040404]">
                                        {testimonial.PersonnelName}
                                    </span>
                                    <span className="text-[11px] sm:text-[11.5px] lg:text-[12px] font-rubik font-normal leading-[13px] sm:leading-[14px] lg:leading-[15px] text-left text-[#7d7d7d]">
                                        {testimonial.PersonnelRole}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
} 