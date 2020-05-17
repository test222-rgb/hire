import Head from 'next/head'
import Router from 'next/router'
import React from 'react'
import Container from 'components/Container'
import Progress from 'components/Progress'
import Button from 'components/Form'
import Link from 'components/Link'
import PublicLayout from 'containers/PublicLayout'
import { useFetchUser } from 'utils/user.js';

import './homepage.scss'

const HomePage = () => {
  const { user, loading } = useFetchUser()

  if (user && !loading) {
    Router.replace('/profile')
  }

  return (
    <div className="HomePage">
      <Head>
        <title>HomePage</title>
      </Head>
      <Progress />
      <PublicLayout>
        <Container>
          <div className="row">
            <div className="col-md-12 HomePage-Content">
              <h1>
                Login to see your profile and vist Event Listing page.
              </h1>
            </div>
          </div>
        </Container>
      </PublicLayout>
    </div>
  )
}

export default HomePage
