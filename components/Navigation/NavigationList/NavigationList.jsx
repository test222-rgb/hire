import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const NavigationList = ({ children, className }) => (
  <ul
    className={classNames('NavigationList', {
      [className]: className,
    })}
  >
    {children}
  </ul>
)

NavigationList.propTypes = {
  className: PropTypes.string,
}

export default NavigationList
