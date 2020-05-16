import React from 'react'
import Footer from 'components/Footer'
import Layout from 'components/Layout'
import Main from 'components/Main'
import PublicHeaderContainer from './PublicHeader'

const PublicLayout = ({ children }) => (
  <Layout>
    <PublicHeaderContainer />
    <Main>
      {children}
    </Main>
    <Footer />
  </Layout>
)

export default PublicLayout
