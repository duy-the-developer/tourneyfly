import { SVGProps } from 'react'

type TMainNavItem = {
	name: string
	href: string
	pathname: string
	icon: (
		props: SVGProps<SVGSVGElement> & {
			title?: string | undefined
			titleId?: string | undefined
		}
	) => JSX.Element
	current?: boolean
}

type TSubNavItem = Partial<TMainNavItem>

export type TMainNav = TMainNavItem[]
export type TSubNav = TSubNavItem[]
