import { Modal } from '../../../../Modal'
import type { Dispatch, SetStateAction } from 'react'

type TProps = {
    openModal: boolean
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

export const CreateTournamentModal = ({ openModal, setOpenModal }: TProps) => {
    return (
        <Modal
            open={openModal}
            setOpen={setOpenModal}
            title='New Tournament'
            message=''
            handleOkay={() => console.log('New Tournament Created')}
        >
            <div className='text-slate-900'>Create Tournament Modal</div>
        </Modal>
    )
}
