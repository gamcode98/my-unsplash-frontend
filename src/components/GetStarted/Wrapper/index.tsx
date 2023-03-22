import React from 'react'
import { IAlert } from '../../../interfaces/IAlert'
import { AuthenticationNavigation } from '../../../types/AuthenticationNavigation'

interface Props {
  children: JSX.Element | JSX.Element[]
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setAuthNavigation: React.Dispatch<React.SetStateAction<AuthenticationNavigation>>
  setHideLoginWithGoogle: React.Dispatch<React.SetStateAction<boolean>>
  setAlert: React.Dispatch<React.SetStateAction<IAlert>>
}

const Wrapper = (props: Props): JSX.Element => {
  const { children, isLoading, setIsLoading, setAuthNavigation, setHideLoginWithGoogle, setAlert } = props

  return (
    <>
      {React.Children
        .toArray(children)
        .map((child: any) => React.cloneElement(child, { isLoading, setIsLoading, setAuthNavigation, setHideLoginWithGoogle, setAlert }))}
    </>
  )
}

export { Wrapper }
