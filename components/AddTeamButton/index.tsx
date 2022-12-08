import { useState } from 'react'
import { EmptyStateButton } from '../common/EmptyStateButton'
import { UserGroupIcon } from '@heroicons/react/24/outline'

import { InputWithLabel, Modal } from '../common'
import { ComboBoxWithImage } from '../common/ComboBoxWithImage'

export type TCountry = {
    id: string
    name: string
    imageUrl: string
}

const AddTeamButton = () => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState<TCountry | null>(
        null
    )
    const [teamName, setTeamName] = useState('')
    const [member1, setMember1] = useState('')
    const [member2, setMember2] = useState('')

    const handleAddTeam = () => {
        console.log('add team')
        setOpenModal(false)
    }

    const addTeamDialog = (
        <div className='flex flex-col items-start justify-center gap-y-4'>
            <ComboBoxWithImage
                label='Country'
                selected={selectedCountry}
                setSelected={setSelectedCountry}
            />
            <InputWithLabel
                id='team-name'
                type='text'
                label='Team Name'
                placeholder='My Team'
                onChangeHandler={(e) => setTeamName(e.target.value)}
                required={true}
            />
            <InputWithLabel
                id='member-1'
                type='text'
                label='Member 1'
                placeholder='John Doe'
                onChangeHandler={(e) => setMember1(e.target.value)}
                required={true}
            />
            <InputWithLabel
                id='member-2'
                type='text'
                label='Member 2'
                placeholder='Jane Doe'
                onChangeHandler={(e) => setMember2(e.target.value)}
                required={true}
            />
        </div>
    )

    return (
        <div className='mt-4'>
            <Modal
                open={openModal}
                setOpen={setOpenModal}
                title={'Add Team'}
                message=''
                handleOkay={handleAddTeam}
                icon={
                    <UserGroupIcon className='w-12 h-12 text-aqua mx-auto mb-2' />
                }
            >
                {addTeamDialog}
            </Modal>
            <EmptyStateButton
                label='Add Team'
                handleClick={() => setOpenModal(true)}
            />
        </div>
    )
}

export default AddTeamButton
