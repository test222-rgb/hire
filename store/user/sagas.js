import axios from 'axios'
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import { USER_COUNTRY_GET_REQUEST, USER_COUNTRY_GET_SUCCESS } from './actions'

function* userCountryGetRequestSaga() {
  const request = () => axios.get('http://ip-api.com/json').then(response => ({ response }))
  const { response } = yield call(request)

  if (response) {
    const { countryCode } = response
    yield put({
      type: USER_COUNTRY_GET_SUCCESS,
      data: {
        code: countryCode,
      },
    })
  }
}

function* watchUserCountryGetRequest() {
  yield takeLatest(USER_COUNTRY_GET_REQUEST, userCountryGetRequestSaga)
}

export default function* rootSaga() {
  yield all([
    fork(watchUserCountryGetRequest),
  ])
}
