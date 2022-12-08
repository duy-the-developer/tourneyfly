import { Dispatch, SetStateAction, useState } from 'react'
import { Combobox } from '@headlessui/react'
import { classNames } from '../../../utils'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import { countries } from '../../../data.test'
import Image from 'next/image'

import type { TCountry } from '../../AddTeamButton'

type TProps = {
    label: string
    selected: TCountry | null
    setSelected: Dispatch<SetStateAction<TCountry | null>>
}

export const ComboBoxWithImage = ({ label, selected, setSelected }: TProps) => {
    const [query, setQuery] = useState('')

    const filteredCountries =
        query === ''
            ? countries
            : countries.filter((country) => {
                  return country.name
                      .toLowerCase()
                      .includes(query.toLowerCase())
              })

    return (
        <Combobox as='div' value={selected} onChange={setSelected}>
            <Combobox.Label className='block text-sm font-medium text-gray-200'>
                {label}
            </Combobox.Label>
            <div className='relative mt-1'>
                <Combobox.Input
                    className='text-slate-400 w-full rounded-md border border-gray-300 bg-slate-800 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
                    onChange={(event) => setQuery(event.target.value)}
                    // @ts-ignore
                    displayValue={(country) => country?.name}
                />
                <Combobox.Button className='absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none'>
                    <ChevronUpDownIcon
                        className='h-5 w-5 text-gray-400'
                        aria-hidden='true'
                    />
                </Combobox.Button>

                {filteredCountries.length > 0 && (
                    <Combobox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-slate-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                        {filteredCountries.map((country) => (
                            <Combobox.Option
                                key={country.id}
                                value={country}
                                className={({ active }) =>
                                    classNames(
                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                        active
                                            ? 'bg-indigo-600 text-white'
                                            : 'text-gray-200'
                                    )
                                }
                            >
                                {({ active, selected }) => (
                                    <>
                                        <div className='flex items-center'>
                                            <Image
                                                quality={50}
                                                src={country.imageUrl}
                                                alt={country.name}
                                                className='h-6 w-6 flex-shrink-0 rounded-full'
                                                height={24}
                                                width={24}
                                            />
                                            <span
                                                className={classNames(
                                                    'ml-3 truncate',
                                                    selected && 'font-semibold'
                                                )}
                                            >
                                                {country.name}
                                            </span>
                                        </div>

                                        {selected && (
                                            <span
                                                className={classNames(
                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                    active
                                                        ? 'text-white'
                                                        : 'text-indigo-600'
                                                )}
                                            >
                                                <CheckIcon
                                                    className='h-5 w-5'
                                                    aria-hidden='true'
                                                />
                                            </span>
                                        )}
                                    </>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                )}
            </div>
        </Combobox>
    )
}
