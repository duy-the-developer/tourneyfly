import { Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const MobileMenuButton = ({ open }: { open: Boolean }) => {
	return (
		<div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
			{/* Mobile menu button */}
			<Popover.Button className="transition -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-aqua hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
				<span className="sr-only">Open menu</span>
				{open ? (
					<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
				) : (
					<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
				)}
			</Popover.Button>
		</div>
	)
}

export default MobileMenuButton
