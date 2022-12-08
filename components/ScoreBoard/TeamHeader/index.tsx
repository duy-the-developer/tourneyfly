import React from 'react'
import Image from 'next/image'

import type { TTeam } from '../../../types'

type TProps = { id: string; teams: TTeam[] }

export const TeamHeader = ({ id, teams }: TProps) => {
	return (
		<div className="flex justify-center min-w-[30px]">
			<Image
				src={
					teams.find((team) => team._id.toString() === id)!.country
						.imageUrl
				}
				alt={`team ${id} logo`}
				className="rounded-full"
				width={30}
				height={30}
			/>
		</div>
	)
}
