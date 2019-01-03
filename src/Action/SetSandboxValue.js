export const changeCodeValue = value => {
  console.log(value)
  return {
    type: 'CHNAGE_CODE',
    payload: value
  }
}