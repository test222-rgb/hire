import cookie from 'js-cookie'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { setAuthorizationHeader } from 'services/api'
import rootReducer from 'store/reducer'
import rootSaga from 'store/sagas'

const makeStore = (initialState, { isServer, req = null }) => {
  let state = initialState
  const token = req ? req.universalCookies.cookies.token : cookie.get('token')
  if (token) {
    setAuthorizationHeader(token)
    state = {
      ...initialState,
      auth: {
        isLoggedIn: true,
        token,
      },
    }
  }

  const middleware = []

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV !== 'production',
  })
  middleware.push(loggerMiddleware)

  const store = createStore(rootReducer, state, composeWithDevTools(
    applyMiddleware(...middleware),
  ))

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  return store
}

export default makeStore
