import Image from "next/image";
import { Homepage } from "@/components/Types/definitions";
import TestimonialCarousel from "@/components/TestimonialCarousel";
interface TestimonialsProps {
    Testimonials: Homepage['Testimonials'];
}

export default function Testimonials({ Testimonials }: TestimonialsProps) {
    return (
        <section className="w-full bg-[#ffffff] py-[24px] sm:py-[36px] lg:py-[48px]">
            <div className="w-full Container px-4 sm:px-6 lg:px-[100px]">
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
                    <div className="flex flex-col gap-7 justify-center items-start w-full lg:flex-1">
                        <div className="flex flex-col gap-[12px] justify-center items-start w-full">
                            <span className="text-sm font-rubik font-semibold leading-4 sm:leading-4 lg:leading-5 text-left text-[#f9ae17] uppercase">
                                Hear from our Clients
                            </span>
                        </div>
                        <TestimonialCarousel testimonials={Testimonials} />
                    </div>
                    <div className="w-full lg:w-[46%]">
                        <div className="flex flex-col gap-[58px] justify-start items-center w-full ml-0 lg:ml-[92px]">
                            <Image
                                src="/images/TestimonialsImage.png"
                                alt="Training session"
                                width={424}
                                height={256}
                                className="w-full rounded-md object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
