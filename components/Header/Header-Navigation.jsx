import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Header-Navigation.scss'

const HeaderNavigation = ({ children, isOpen }) => (
  <nav
    className={classNames('Header-Navigation', {
      'Header-Navigation_open': isOpen,
    })}
  >
    {children}
  </nav>
)

HeaderNavigation.propTypes = {
  isOpen: PropTypes.bool,
}

export default HeaderNavigation
