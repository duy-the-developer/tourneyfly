import { format } from 'date-fns'
import { InputWithLabel, Modal } from '../../../../../common'
import type { Dispatch, SetStateAction } from 'react'

type TProps = {
    openModal: boolean
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const today = new Date()

export const CreateTournamentModal = ({ openModal, setOpenModal }: TProps) => {
    return (
        <Modal
            open={openModal}
            setOpen={setOpenModal}
            title='New Tournament'
            message=''
            handleOkay={() => console.log('New Tournament Created')}
        >
            <div className='flex flex-col justify-start items-start gap-4 mb-6'>
                <InputWithLabel
                    id='name'
                    type='name'
                    label='Name'
                    placeholder='My Tournament'
                    onChangeHandler={(e) => console.log(e.target.value)}
                />
                <InputWithLabel
                    id='start-date'
                    type='date'
                    label='Start Date'
                    onChangeHandler={(e) => console.log(e.target.value)}
                    defaultValue={format(today, 'yyyy-MM-dd')}
                    min={format(today, 'yyyy-MM-dd')}
                />
            </div>
        </Modal>
    )
}
