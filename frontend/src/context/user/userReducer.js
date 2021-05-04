import { LOGIN_USER } from '../types'
const handlers = {
  [LOGIN_USER]: (state, { payload }) => ({ ...payload }),

  DEFAULT: () => {
    new Error()
  },
}

export const UserReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
