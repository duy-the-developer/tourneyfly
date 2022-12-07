import Image from 'next/image'
import type { TData } from '..'
import type { Dispatch, SetStateAction } from 'react'

type TProps = {
    firstTeam: TData
    secondTeam: Partial<TData>
    firstTeamScore: number
    secondTeamScore: number
    setFirstTeamScore: Dispatch<SetStateAction<number>>
    setSecondTeamScore: Dispatch<SetStateAction<number>>
}

export const UpdateDiaglog = ({
    firstTeam,
    secondTeam,
    firstTeamScore,
    secondTeamScore,
    setFirstTeamScore,
    setSecondTeamScore,
}: TProps) => (
    <div className='flex justify-between items-center w-full'>
        <div className='w-1/2 h-full text-slate-200 flex items-center justify-center'>
            <Image
                src={firstTeam.imageUrl}
                alt={`team ${firstTeam.name} logo`}
                className='rounded-full'
                width={70}
                height={70}
            />
        </div>
        <div className='flex h-full text-slate-200'>
            <input
                defaultValue={firstTeamScore}
                className='w-6 bg-slate-800 rounded-lg text-center'
                type='number'
                min={0}
                onChange={(e) => setFirstTeamScore(Number(e.target.value))}
            />
            <span className='text-2xl mx-4'>-</span>
            <input
                defaultValue={secondTeamScore}
                className='w-6 bg-slate-800 rounded-lg text-center'
                type='number'
                min={0}
                onChange={(e) => setSecondTeamScore(Number(e.target.value))}
            />
        </div>
        <div className='w-1/2 h-full text-slate-200 flex items-center justify-center'>
            <Image
                src={secondTeam.imageUrl!}
                alt={`team ${secondTeam.name} logo`}
                className='rounded-full'
                width={70}
                height={70}
            />
        </div>
    </div>
)
