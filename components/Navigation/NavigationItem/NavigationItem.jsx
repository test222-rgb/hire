import classNames from 'classnames'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React from 'react'
import Link from 'components/Link/index'

const NavigationItem = ({ children, href, as, className, title }) => {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <li
      className={classNames('NavigationItem', {
        NavigationItem_active: isActive,
        [className]: className,
      })}
    >
      <Link href={href} as={as} title={title}>
        {children}
      </Link>
    </li>
  )
}

NavigationItem.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default NavigationItem
