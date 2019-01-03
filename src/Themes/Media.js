import { css } from 'styled-components'

const sizes = {
  xs: 375,
  s: 768,
  m: 1024,
  l: 1280,
  xl: 1440
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})