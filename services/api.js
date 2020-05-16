import axios from 'axios'
import { snakeCase, forOwn } from 'lodash'
import mapKeysDeep from 'map-keys-deep-lodash'

const axiosInstance = axios.create()

export const setAuthorizationHeader = token => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const removeAuthorizationHeader = () => {
  delete axiosInstance.defaults.headers.common.Authorization
}

const resolveError = error => {
  if (!error || !error.response) {
    return {
      response: {
        data: {
          status: 'error',
          message: 'Something went wrong...',
        },
      },
    }
  }

  return {
    response: error.response,
  }
}

const formatRequestData = data => mapKeysDeep(data, (value, key) => snakeCase(key))

export const postForResponse = (url, data) => (
  () => axiosInstance.post(url, formatRequestData(data))
    .then(response => ({ response }))
    .catch(error => resolveError(error))
)

export const postFormDataForResponse = (url, data) => {
  const formData = new FormData()

  forOwn(formatRequestData(data), (value, key) => {
    if (typeof value !== 'boolean') {
      formData.append(key, value)
    } else {
      formData.append(key, `${value ? 1 : 0}`)
    }
  })

  return () => axiosInstance.post(url, formData)
    .then(response => ({ response }))
    .catch(error => resolveError(error))
}

export const getForResponse = (url, data) => (
  () => axiosInstance.get(url, { params: formatRequestData(data) })
    .then(response => ({ response }))
    .catch(error => resolveError(error))
)

export const putForResponse = (url, data) => (
  () => axiosInstance.put(url, formatRequestData(data))
    .then(response => ({ response }))
    .catch(error => resolveError(error))
)

export const deleteForResponse = url => (
  () => axiosInstance.delete(url)
    .then(response => ({ response }))
    .catch(error => resolveError(error))
)
