import { format } from 'date-fns'
import { InputWithLabel, Modal } from '../../../../../common'
import { Dispatch, SetStateAction, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'

type TProps = {
    openModal: boolean
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const today = new Date()
const formattedDate = format(today, 'yyyy-MM-dd')

export const CreateTournamentModal = ({ openModal, setOpenModal }: TProps) => {
    const { user } = useUser()
    const router = useRouter()
    const [tournamentName, setTournamentName] = useState('')
    const [tournamentStateDate, setTournamentStartDate] =
        useState(formattedDate)

    const createTournament = async (e: Event) => {
        e.preventDefault()
        // return early if conditions are not met
        if (tournamentName === '') return
        if (tournamentStateDate === '') return

        // create tournament
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: tournamentName,
                startDate: tournamentStateDate,
                ownerEmail: user!.email,
            }),
        }

        const response = await fetch('/api/tournaments/create', fetchOptions)

        if (response.status === 200) {
            // trigger revalidation
            router.replace(router.asPath)
        } else {
            console.log('Error creating tournament')
        }

        // close modal
        setOpenModal(false)
    }

    const modalDialog = (
        <div className='flex flex-col justify-start items-start gap-4 mb-6'>
            <InputWithLabel
                id='name'
                type='name'
                label='Name'
                placeholder='My Tournament'
                onChangeHandler={(e) => setTournamentName(e.target.value)}
                required
            />
            <InputWithLabel
                id='start-date'
                type='date'
                label='Start Date'
                onChangeHandler={(e) => setTournamentStartDate(e.target.value)}
                defaultValue={formattedDate}
                min={formattedDate}
                required
            />
        </div>
    )

    return (
        <Modal
            open={openModal}
            setOpen={setOpenModal}
            title='New Tournament'
            message=''
            handleOkay={createTournament}
        >
            {modalDialog}
        </Modal>
    )
}
