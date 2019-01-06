export const changeCodeValue = value => {
  return {
    type: 'SET_CODE_VALUE',
    payload: value
  }
}

export const changeResultValue = value => {
  return {
    type: 'SET_RESULT_VALUE',
    payload: value
  }
}
