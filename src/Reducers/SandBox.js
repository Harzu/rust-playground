const defaultState = [{
  value: `fn main() {\n    // ...code\n}`
}]

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'SET_CODE_VALUE':
      state[0].value = action.payload
      return [ ...state ]
    case 'GET_CODE_VALUE':
      return state[0].value
    default:
      return [ ...state ]
  }
}