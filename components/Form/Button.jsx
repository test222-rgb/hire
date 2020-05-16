/* eslint-disable react/button-has-type */

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Button.scss'

const Button = ({ children, type, className, color, size, ...restProps }) => (
  <button
    className={classNames('Button', {
      [`Button_${size}`]: size,
      [`Button_${color}`]: color,
      [className]: className,
    })}
    type={type}
    {...restProps}
  >
    {children}
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'white',
  ]),
  size: PropTypes.oneOf([
    'md',
    'sm',
    'xs',
  ]),
  type: PropTypes.oneOf([
    'submit',
    'reset',
    'button',
  ]),
}

Button.defaultProps = {
  type: 'button',
  color: 'primary',
  size: 'sm',
}

export default Button
