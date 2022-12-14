// packages
import { useRouter } from 'next/router'
import {
	ChartBarIcon,
	TableCellsIcon,
	UserGroupIcon,
	UsersIcon,
} from '@heroicons/react/24/outline'

// components
import { PageLayout } from '../common'

// types
import type { ReactNode } from 'react'

export const TournamentLayout = ({ children }: { children: ReactNode }) => {
	const router = useRouter()
	const { tournament_id } = router.query
	const navigation = {
		main: [
			{
				name: 'Leaderboard',
				href: `/tournament/${tournament_id}`,
				pathname: '/tournament/[tournament_id]',
				icon: ChartBarIcon,
				current: true,
				type: 'button',
			},
			{
				name: 'Results',
				href: `/tournament/${tournament_id}/results`,
				pathname: '/tournament/[tournament_id]/results',
				icon: TableCellsIcon,
				current: false,
			},
			{
				name: 'Teams',
				href: `/tournament/${tournament_id}/teams`,
				pathname: '/tournament/[tournament_id]/teams',
				icon: UserGroupIcon,
				current: false,
			},
			{
				name: 'Players',
				href: `/tournament/${tournament_id}/teams`,
				pathname: '/tournament/[tournament_id]/teams',
				icon: UsersIcon,
				current: false,
			},
		],
		sub: [
			{ name: 'Twitch', href: '#' },
			{ name: 'Instagram', href: '#' },
			{ name: 'Facebook', href: '#' },
			{ name: 'Tiktok', href: '#' },
			{ name: 'Discord', href: '#' },
		],
	}

	return <PageLayout navOptions={navigation}>{children}</PageLayout>
}
