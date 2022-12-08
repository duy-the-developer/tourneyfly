import React, { ReactNode } from 'react'

export const TableContainer = ({ children }: { children: ReactNode }) => {
	return (
		<div className="rounded-lg flex flex-col ">
			<div className="-my-2 overflow-x-auto lg:-mx-8">
				<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
					<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}
