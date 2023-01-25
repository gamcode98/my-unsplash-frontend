import { useController, UseControllerProps } from 'react-hook-form'

interface Props extends UseControllerProps {
  labelId?: string
  typeOfInput: string
  placeholder: string
  labelText?: string
}

const FormControl = (props: Props): JSX.Element => {
  const { field, fieldState } = useController(props)

  return (
    <div className='mb-4'>
      <label
        htmlFor={props.labelId}
        className='block text-xs mb-2'
      >{props.labelText}
      </label>
      <input
        {...field}
        id={props.labelId}
        type={props.typeOfInput}
        placeholder={props.placeholder}
        className={`block px-4 py-2 mb-2 border rounded-md p-2 focus:outline-none w-full 
        ${fieldState.invalid ? 'border-red focus:border-red' : 'border-light-gray focus:border-black'}`}
      />

      {fieldState.invalid && <p className='text-red text-xs'>{fieldState.error?.message}</p>}
    </div>
  )
}

export { FormControl }
