import Head from 'next/head'
import Router from 'next/router'
import React from 'react'
import Container from 'components/Container'
import Progress from 'components/Progress'
import Button from 'components/Form'
import Link from 'components/Link'
import PublicLayout from 'containers/PublicLayout'
import { useFetchUser } from 'utils/user.js';

import './profile.scss'

const Profile = () => {
  const { user, loading } = useFetchUser()

  if (loading) {
    return <p>Loading ..</p>
  }

  if (!user && !loading) {
    Router.replace('/')
  }

  const { picture, name, locale } = user

  return (
    <div className="Profile">
      <Head>
        <title>Profile</title>
      </Head>
      <Progress />
      <PublicLayout>
        <Container>
          <div className="row Profile-Content">
            <div className="col-md-12">
              <h1>Here is your profile information</h1>
            </div>
            <div className="col-md-3">
              <img
                src={picture}
                alt="profilepicture"
                className="Profile-Picture"
              />
              <h2>{name}</h2>
              <strong>{locale}</strong>
            </div>
          </div>
        </Container>
      </PublicLayout>
    </div>
  )
}

export default Profile
