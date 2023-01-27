import React from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>
}

const Account = (props: Props): JSX.Element => {
  const { children, isLoading, setIsLoading, setHasAccount } = props

  return (
    <>
      {React.Children
        .toArray(children)
        .map((child: any) => React.cloneElement(child, { isLoading, setIsLoading, setHasAccount }))}
    </>
  )
}

export { Account }
