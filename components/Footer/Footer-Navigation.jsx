import React from 'react'
import { NavigationItem, NavigationList } from 'components/Navigation'
import { useFetchUser } from 'utils/user.js';

import './Footer-Navigation.scss'

const FooterNavigation = () => {
  const { user, loading } = useFetchUser()

  return (
    <nav className="FooterNavigation">
      <NavigationList className="NavigationList__left">
        {user && !loading ? [
          <NavigationItem href="/profile" key="profile">
            Profile
          </NavigationItem>,
          <NavigationItem href="/event-listing" key="event-listing">
            Event Listing
          </NavigationItem>
        ] : (
          <NavigationItem href="/">
            Home
          </NavigationItem>
        )}
      </NavigationList>
    </nav>
  )
}

export default FooterNavigation
