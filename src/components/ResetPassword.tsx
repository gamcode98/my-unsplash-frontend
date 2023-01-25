import React from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
  setResetPasswordIsPressed: React.Dispatch<React.SetStateAction<boolean>>
  setEmailSent: React.Dispatch<React.SetStateAction<boolean>>
}

const ResetPassword = (props: Props): JSX.Element => {
  const { children, setResetPasswordIsPressed, setEmailSent } = props

  return (
    <div>
      {React.Children
        .toArray(children)
        .map((child: any) => React.cloneElement(child, { setResetPasswordIsPressed, setEmailSent }))}
    </div>
  )
}

export { ResetPassword }
