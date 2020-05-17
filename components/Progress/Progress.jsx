import Router from 'next/router'
import NProgress from 'nprogress'

import './Progress.scss'

NProgress.configure({
  showSpinner: false,
})

const handleChangeStart = () => {
  NProgress.start()
}

const handleChangeComplete = () => {
  NProgress.done()
}

const handleChangeError = () => {
  NProgress.done()
}

Router.events.on('routeChangeStart', handleChangeStart)
Router.events.on('routeChangeComplete', handleChangeComplete)
Router.events.on('routeChangeError', handleChangeError)

export default () => null
