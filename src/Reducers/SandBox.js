const defaultState = [{
  value: `fn main() {\n    // ...code\n}`,
  resultValue: ''
}]

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'SET_CODE_VALUE':
      state[0].value = action.payload
      return [ ...state ]
    case 'GET_RESULT_VALUE':
      state[0].resultValue = action.payload
      return [ ...state ]
    default:
      return [ ...state ]
  }
}