export const changeCodeValue = value => {
  return {
    type: 'SET_CODE_VALUE',
    payload: value
  }
}

export const getCodeValue = () => {
  return {
    type: 'GET_CODE_VALUE',
    payload: null
  }
} 