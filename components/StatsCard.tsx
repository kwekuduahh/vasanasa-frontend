import React from 'react'
import { NumberTicker } from './magicui/number-ticker';

interface StatsCardProps {
    number: number;
    label: string;
    description: string;
}


const StatsCard: React.FC<{ stats: StatsCardProps }> = ({ stats }) => {
    return (
        <div className="flex flex-col gap-4 justify-start items-start w-full sm:flex-1">
            <span className="text-[32px] sm:text-[48px] lg:text-[64px] font-sora font-semibold leading-10 sm:leading-12 lg:leading-14 text-left text-[#272865]">
                <NumberTicker value={stats.number} delay={0.5} startValue={0} className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-vasanasa-blue" />
            </span>
            <div className="flex flex-col gap-[8px] justify-start items-start">
                <span className="text-[16px] sm:text-[17px] lg:text-[18px] font-sora font-semibold leading-[20px] sm:leading-[21px] lg:leading-[23px] text-left text-[#272865]">
                    {stats.label}
                </span>
                <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-rubik font-normal leading-[17px] sm:leading-[18px] lg:leading-[20px] text-left text-[#000000a3] w-full sm:w-[54%]">
                    {stats.description}
                </span>
            </div>
        </div>
    )
}

export default StatsCard