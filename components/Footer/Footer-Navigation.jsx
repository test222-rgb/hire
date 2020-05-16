import React from 'react'
import { NavigationItem, NavigationList } from 'components/Navigation'

import './Footer-Navigation.scss'

const FooterNavigation = () => (
  <nav className="FooterNavigation">
    <NavigationList className="NavigationList__left">
      <NavigationItem href="/sign-in">
        Login
      </NavigationItem>
      <NavigationItem href="/sign-up">
        Sign Up
      </NavigationItem>
    </NavigationList>
  </nav>
)

export default FooterNavigation
