import type { TSubNav } from '../../../../types/TNavigation'

const SecondaryNav = ({ navigation }: { navigation: TSubNav }) => {
	return (
		<div className="pt-10">
			<p
				className="px-3 text-sm font-medium text-aqua"
				id="communities-headline"
			>
				Socials
			</p>
			<div
				className="mt-3 space-y-2"
				aria-labelledby="communities-headline"
			>
				{navigation.map((community) => (
					<a
						key={community!.name}
						href={community!.href}
						className="transition duration-300 group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:underline hover:bg-opacity-30 hover:bg-slate-900"
					>
						<span className="truncate">{community!.name}</span>
					</a>
				))}
			</div>
		</div>
	)
}

export default SecondaryNav
