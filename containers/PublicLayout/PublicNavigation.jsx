import PropTypes from 'prop-types'
import React from 'react'
import Button from 'components/Form'
import { HeaderNavigation } from 'components/Header'
import { NavigationItem, NavigationList } from 'components/Navigation'

const PublicNavigationContainer = ({ isOpen }) => (
  <HeaderNavigation isOpen={isOpen}>
    <NavigationList className="NavigationList__left" />
    <NavigationList className="NavigationList__right">
      <NavigationItem href="/sign-in">
        <Button size="sm" color="white">
          Login
        </Button>
      </NavigationItem>
      <NavigationItem href="/sign-up">
        <Button size="sm" color="primary">
          Sign Up
        </Button>
      </NavigationItem>
    </NavigationList>
  </HeaderNavigation>
)

PublicNavigationContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default PublicNavigationContainer
