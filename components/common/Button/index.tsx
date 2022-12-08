import React from 'react'

type TProps = {
    cStyle: string
    label: string
    onClickFunc: () => void
}

const Button = ({ cStyle, label, onClickFunc }: TProps) => {
    return (
        <button
            onClick={onClickFunc}
            className={`${cStyle} flex justify-center rounded-md px-4 py-2 text-sm font-medium text-black  focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2`}
        >
            <span>{label}</span>
        </button>
    )
}

export default Button
