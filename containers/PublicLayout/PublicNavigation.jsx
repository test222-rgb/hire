import PropTypes from 'prop-types'
import React from 'react'
import Button from 'components/Form'
import { HeaderNavigation } from 'components/Header'
import { NavigationItem, NavigationList } from 'components/Navigation'
import { useFetchUser } from 'utils/user.js';

const PublicNavigationContainer = ({ isOpen }) => {
  const { user, loading } = useFetchUser()

  return (
    <HeaderNavigation isOpen={isOpen}>
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
      <NavigationList className="NavigationList__right">
        {user && !loading ? (
          <NavigationItem href="/api/logout">
            <Button
              size="sm"
              color="white">
              Logout
            </Button>
          </NavigationItem>
        ) : null}
        {!user && !loading ? (
          <NavigationItem href="/api/Login">
            <Button
              size="sm"
              color="primary">
              Login
            </Button>
          </NavigationItem>
        ) : null}
      </NavigationList>
    </HeaderNavigation>
  )
}

PublicNavigationContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default PublicNavigationContainer
