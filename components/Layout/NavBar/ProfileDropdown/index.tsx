// packages
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

// components
import ProfileImage from '../../../common/ProfileImage'

// utils
import classNames from '../../../../utils/classNames'

// data
import { userNavigation } from '../../../../data.test'

const ProfileDropdown = () => {
  return (
    <Menu as='div' className='relative ml-5 flex-shrink-0'>
      <div>
        <Menu.Button className='flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2'>
          <ProfileImage cStyle='h-8 w-8' />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <Link
                  href={item.href}
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block py-2 px-4 text-sm text-gray-700'
                  )}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default ProfileDropdown
