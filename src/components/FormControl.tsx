import { useController, UseControllerProps } from 'react-hook-form'

const FormControl = (props: UseControllerProps): JSX.Element => {
  const { field, fieldState } = useController(props)

  return (
    <div className='mb-4'>
      <label
        htmlFor='password'
        className='block text-xs mb-2'
      >Password
      </label>
      <input
        {...field}
        id='password'
        type='password'
        placeholder='Your secret password'
        className={`block px-4 py-2 mb-2 border rounded-md p-2 focus:outline-none w-full 
        ${fieldState.invalid ? 'border-red focus:border-red' : 'border-light-gray focus:border-black'}`}
      />

      {fieldState.invalid && <p className='text-red text-xs'>{fieldState.error?.message}</p>}
    </div>
  )
}

export { FormControl }
