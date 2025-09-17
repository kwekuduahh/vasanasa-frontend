import React from 'react'
import Image from 'next/image'
import { CalendarIcon, MapPin } from 'lucide-react'

interface EventCardProps {
    title: string
    date: string
    location: string
    index: number
}

const EventCard: React.FC<EventCardProps> = ({ title, date, location, index }) => {
    return (
        <div className="flex justify-start items-start w-full">
            <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-rubik font-semibold leading-[15px] sm:leading-[16px] lg:leading-[17px] text-left text-[#f9ae17]">
                {`0${index}`}
            </span>
            <div className="flex flex-col gap-[10px] justify-start items-center self-center w-full ml-[12px]">
                <span className="text-[18px] sm:text-[19px] lg:text-[20px] font-rubik font-normal leading-[21px] sm:leading-[22px] lg:leading-[23px] text-left text-[#f1f1f1] w-full">
                    {title}
                </span>
                <div className="flex flex-col sm:flex-row justify-start items-start w-full gap-4 sm:gap-0">
                    <div className="flex justify-start items-center w-full">
                        <CalendarIcon size={16} className="text-[#f2f1fd]" />
                        <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-rubik font-normal leading-[15px] sm:leading-[16px] lg:leading-[17px] text-left text-[#f2f1fd] ml-[10px]">
                            {date}
                        </span>
                    </div>
                    <div className="flex gap-[10px] justify-start items-start self-center w-full">
                        <MapPin size={16} className="text-[#f2f1fd]" />
                        <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-rubik font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-left text-[#f2f1fd] self-center w-[86%]">
                            {location}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard