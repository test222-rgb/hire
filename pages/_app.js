import 'utils/route-watcher'
import withReduxSaga from 'next-redux-saga'
import withRedux from 'next-redux-wrapper'
import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { compose } from 'redux'
import Store from 'store'

import './styles.scss'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

const enhance = compose(
  withRedux(Store),
  withReduxSaga,
)

export default enhance(MyApp)
