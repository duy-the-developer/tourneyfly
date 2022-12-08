type TProps = {
    id: string
    type: string
    label?: string
    placeholder?: string
    onChangeHandler: (arg?: any) => void
    defaultValue?: string
    min?: string | number
    max?: string | number
}

export const InputWithLabel = ({
    id,
    label,
    type,
    placeholder,
    onChangeHandler,
    defaultValue,
    min,
    max,
}: TProps) => {
    return (
        <div>
            <label
                htmlFor={id}
                className='block text-sm font-medium text-gray-300'
            >
                {label}
            </label>
            <div className='mt-1'>
                <input
                    type={type}
                    name={id}
                    id={id}
                    className='bg-slate-800 text-gray-400 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange focus:ring-orange sm:text-sm'
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    defaultValue={defaultValue}
                    min={min}
                    max={max}
                />
            </div>
        </div>
    )
}
