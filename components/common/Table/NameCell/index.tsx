import React from 'react'
import Image from 'next/image'

type TProps = {
    name: string
    imageUrl?: string
    members?: string[]
    [key: string]: any
}

export const NameCell = ({ name, imageUrl, members }: TProps) => {
    return (
        <div className='flex items-center'>
            <div className='h-10 w-10 flex-shrink-0'>
                {imageUrl && (
                    <Image
                        className='rounded-full'
                        width={40}
                        height={40}
                        src={imageUrl}
                        alt={`${name}-logo`}
                    />
                )}
            </div>
            <div className='ml-4'>
                <div className='font-medium text-aqua'>{name}</div>
                {members && (
                    <div className='text-gray-300'>{members!.join(', ')}</div>
                )}
            </div>
        </div>
    )
}
