import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import MenuIcon from './icons/menu.svg?sprite'
import XIcon from './icons/x.svg?sprite'

import './Header-Toggle.scss'

const HeaderToggle = ({ isOpen, onClick }) => (
  <button
    className={classNames('Header-Toggle', {
      'Header-Toggle_open': isOpen,
    })}
    type="button"
    aria-label="Toggle navigation"
    onClick={onClick}
  >
    {!isOpen ? (
      <MenuIcon />
    ) : (
      <XIcon />
    )}
  </button>
)

HeaderToggle.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
}

export default HeaderToggle
