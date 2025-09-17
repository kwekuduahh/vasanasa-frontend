'use client'
import { cn } from '@/app/lib/utils'
import { dynamicIconImports, DynamicIcon } from 'lucide-react/dynamic'
import Link from 'next/link'
import React from 'react'

interface LinkButtonProps {
    children?: React.ReactNode
    href: string
    className?: string
    iconName?: keyof typeof dynamicIconImports
    iconClassName?: string
}
const LinkButton: React.FC<LinkButtonProps> = ({
    children,
    href,
    className,
    iconName,
    iconClassName,
}) => {
    return (
        <Link href={href} className={`px-4 text-sm md:text-base lg:text-lg font-inter font-medium leading-2 text-left rounded-md py-1.5 flex flex-row justify-center items-center gap-x-2 cursor-pointer mt-4 lg:mt-0 ${iconName ? 'mr-2' : ''} touch-manipulation transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 ${className}`}>
            {children}
            {iconName && (
                <DynamicIcon name={iconName} className={cn(iconClassName)} />
            )}
        </Link>
    )
}

export default LinkButton