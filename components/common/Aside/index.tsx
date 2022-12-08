import type { ReactNode } from 'react'

const Aside = ({ children }: { children: ReactNode }) => {
	// TODO: Refactor this
	return (
		<aside className="hidden xl:col-span-4 xl:block">
			<div className="sticky top-4 space-y-4">{children}</div>
		</aside>
	)
}

export default Aside
