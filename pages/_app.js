import 'utils/route-watcher'
import withReduxSaga from 'next-redux-saga'
import withRedux from 'next-redux-wrapper'
import { UserProvider, useFetchUser } from 'utils/user.js';
import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { compose } from 'redux'
import Router from 'next/router'
import Store from 'store'

import './styles.scss'


const MyApp = ({ Component, pageProps, store }) => {
  const { user, loading } = useFetchUser()

  return (
    <Provider store={store}>
      <UserProvider value={{ user, loading }} >
        <Component {...pageProps} />
      </UserProvider>
    </Provider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}

const enhance = compose(
  withRedux(Store),
  withReduxSaga,
)

export default enhance(MyApp)
