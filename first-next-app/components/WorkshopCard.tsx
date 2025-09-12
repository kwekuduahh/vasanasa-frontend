import React from 'react';
import LinkButton from '@/components/ui/LinkButton';

interface WorkshopCardProps {
    title: string;
    category: string;
    description: string;
    id: string;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({
    title,
    category,
    description,
    id,
}) => {
    return (
        <div className="flex flex-col gap-2 justify-start items-start w-full rounded-lg p-4 relative">
            <LinkButton
                href={`/workshops${id}`}
                iconName="arrow-right"
                iconClassName="h-6 w-6 stroke-white stroke-2 -rotate-45 absolute"
                className="rounded-full bg-vasanasa-blue w-8 h-8 absolute top-6 right-4 flex justify-center items-center">
            </LinkButton>
            <div className="h-28 w-full bg-gray-200 rounded-md"></div>
            <span className="text-xs font-rubik font-medium text-left text-gray-400 uppercase py-1 px-2 bg-gray-200 rounded-full">
                {category}
            </span>
            <div className="flex flex-col gap-1 justify-start items-start w-full">
                <h4 className="text-md font-rubik font-semibold leading-2 text-left text-[#f9ae17] w-full text-nowrap overflow-hidden text-ellipsis whitespace-nowrap">
                    {title}
                </h4>
                <p className="text-sm font-rubik font-normal leading-2 text-left text-[#0000007a]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default WorkshopCard;
