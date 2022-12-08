// components
import { Layout } from '../../../../components/common'
import ScoreBoard from '../../../../components/ScoreBoard'
import { TournamentLayout } from '../../../../components/TournamentLayout'

// lib
import { getTournamentById } from '../../../../lib/getTournamentById'

// hooks
import { useRefreshData } from '../../../../hooks/useRefreshData'
import { useRouter } from 'next/router'
import { useState, useReducer, useEffect } from 'react'

// types
import type { ReactElement } from 'react'
import type { TTournament } from '../../../../types'
import AddTeamButton from '../../../../components/AddTeamButton'

type TProps = {
	tournament: TTournament
}

const TournamentResults = ({ tournament }: TProps) => {
	const { _id, teams, ownerEmail } = tournament

	useRefreshData(10000)

	return (
		<main className="lg:col-span-9 xl:col-span-10">
			<ScoreBoard
				tournament_id={_id.toString()}
				teams={teams as any[]}
				ownerEmail={ownerEmail}
			/>
			{teams.length === 0 && <AddTeamButton />}
		</main>
	)
}

TournamentResults.getLayout = (page: ReactElement) => {
	return (
		<Layout>
			<TournamentLayout>{page}</TournamentLayout>
		</Layout>
	)
}

export const getServerSideProps = async (context: any) => {
	const { tournament_id } = context.query
	try {
		const [tournament] = await Promise.all([
			getTournamentById(tournament_id as string),
		])

		const props = {
			tournament: JSON.parse(JSON.stringify(tournament)),
		}

		return { props }
	} catch (error) {
		console.error(error)
		// TODO: handle error
	}
}

export default TournamentResults
