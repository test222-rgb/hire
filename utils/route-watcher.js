import Router from 'next/router'

Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 0)
})

if (process.env.NODE_ENV !== 'production') {
  Router.events.on('routeChangeComplete', () => {
    const path = '/_next/static/css/styles.chunk.css'
    const chunksNodes = document.querySelectorAll(`link[href*="${path}"]:not([rel=preload])`)
    if (chunksNodes.length) {
      const timestamp = new Date().valueOf()
      chunksNodes[0].href = `${path}?ts=${timestamp}`
    }
  })
}
