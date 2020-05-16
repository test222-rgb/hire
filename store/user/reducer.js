import { USER_COUNTRY_GET_SUCCESS } from './actions'

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case USER_COUNTRY_GET_SUCCESS: {
      return {
        ...state,
        country: action.data,
      }
    }

    default:
      return state
  }
}
