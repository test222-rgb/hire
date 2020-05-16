import React, { useState } from 'react'
import { Header, HeaderToggle } from 'components/Header'
import PublicNavigationContainer from './PublicNavigation'

const PublicHeaderContainer = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Header>
      <HeaderToggle
        isOpen={isOpen}
        onClick={() => {
          setOpen(!isOpen)
        }}
      />
      <PublicNavigationContainer isOpen={isOpen} />
    </Header>
  )
}

export default PublicHeaderContainer
