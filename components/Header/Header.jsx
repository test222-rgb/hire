import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Container from 'components/Container'

import './Header.scss'

const Header = ({ children, className }) => (
  <header
    className={classNames('Header', {
      [className]: className,
    })}
  >
    <Container>
      <div className="col-md-12 Header-Content">
        {children}
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  className: PropTypes.string,
}

export default Header
