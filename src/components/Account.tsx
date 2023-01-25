import React from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
  isLoading: boolean
  setIsloading: React.Dispatch<React.SetStateAction<boolean>>
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>
}

const Account = (props: Props): JSX.Element => {
  const { children, isLoading, setIsloading, setHasAccount } = props

  return (
    <>
      {React.Children
        .toArray(children)
        .map((child: any) => React.cloneElement(child, { isLoading, setIsloading, setHasAccount }))}
    </>
  )
}

export { Account }
