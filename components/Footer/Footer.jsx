import React from 'react'
import Container from 'components/Container'
import FooterNavigation from 'components/Footer/Footer-Navigation'
import Link from 'components/Link'

import './Footer.scss'

const Footer = () => (
  <footer className="Footer">
    <Container>
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          <FooterNavigation />
        </div>
        <div className="col-md-3 Footer-Icons" />
      </div>
    </Container>
  </footer>
)

export default Footer
