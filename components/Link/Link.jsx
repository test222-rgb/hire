import classNames from 'classnames'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React from 'react'

import './Link.scss'

const Link = ({ activeClassName, className, href, children, prefetch, as, ...rest }) => {
  const router = useRouter()
  return (
    <NextLink href={href} as={as} prefetch={prefetch}>
      <a
        className={classNames('Link', {
          [className]: className,
          [activeClassName]: router.asPath === href && activeClassName,
        })}
        {...rest}
      >
        {children}
      </a>
    </NextLink>
  )
}

Link.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.string,
  href: PropTypes.string.isRequired,
  prefetch: PropTypes.bool,
}

Link.defaultProps = {
  prefetch: false,
}

export default Link
