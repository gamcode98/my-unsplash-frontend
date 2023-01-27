import React from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
  setHasAccount?: React.Dispatch<React.SetStateAction<boolean>>
  setEmailSent: React.Dispatch<React.SetStateAction<boolean>>
  setHideLoginWithGoogle: React.Dispatch<React.SetStateAction<boolean>>
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const ResetPassword = (props: Props): JSX.Element => {
  const { children, setHasAccount, setEmailSent, setHideLoginWithGoogle, setShowLogin } = props

  return (
    <div>
      {React.Children
        .toArray(children)
        .map((child: any) => React.cloneElement(child, { setHasAccount, setEmailSent, setHideLoginWithGoogle, setShowLogin }))}
    </div>
  )
}

export { ResetPassword }
