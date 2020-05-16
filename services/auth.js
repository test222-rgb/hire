import cookie from 'js-cookie'
import nextCookie from 'next-cookies'
import Router from 'next/router'
import { removeAuthorizationHeader, setAuthorizationHeader } from 'services/api'

export const auth = async ctx => {
  const { token } = nextCookie(ctx)

  if (ctx.req && !token) {
    let redirectUrl = ''
    if (ctx.asPath !== '/sign-in') {
      redirectUrl = `?redirectUrl=${encodeURIComponent(ctx.asPath)}`
    }
    ctx.res.writeHead(302, { Location: `/sign-in${redirectUrl}` })
    ctx.res.end()

    return undefined
  }

  if (!token) {
    await Router.push('/sign-in')
  } else {
    setAuthorizationHeader(token)
  }

  return token
}

export const login = async ({ token, redirectUrl = '/dashboard', asUrl }) => {
  cookie.set('token', token, { expires: 1 })
  await Router.push(redirectUrl, asUrl)
}

export const logout = async () => {
  removeAuthorizationHeader()
  cookie.remove('token')
  window.localStorage.setItem('logout', `${Date.now()}`)
  await Router.push('/sign-in')
}
