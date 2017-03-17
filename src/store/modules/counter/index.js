/* @flow */

import type { Counter } from './types'

type Action = {
  type: string,
  payload?: Object,
  error?: boolean,
  meta?: any
}
state = {
  number: 0,
  previousDirection: "Up"
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export default function counter(state = state, action: Action) {
  switch (action.type) {
    case DECREMENT:
      return {...state, state.number - 1}
    case INCREMENT:
      return {...state, state.number + 1}
    default:
      return state
  }
}

export const decrement = (): Action => ({
  type: DECREMENT
})

export const increment = (): Action => ({
  type: INCREMENT,
})
