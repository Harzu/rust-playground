import { rem } from 'polished'
import { fonts } from '../Themes'

const text = `
  font-family: ${fonts.regular};
  font-size: ${rem('16px')};
  line-height: ${rem('20px')};
  color: #000;
`

const titleXL = `
  font-family: ${fonts.regular};
  font-weight: 800;
  font-size: ${rem('30px')};
  line-height: ${rem('37px')};
  color: #000;
`

const titleL = `
  font-family: ${fonts.regular};
  font-weight: 800;
  font-size: ${rem('30px')};
  line-height: ${rem('37px')};
  color: #000;
`

const titleM = `
  font-family: ${fonts.regular};
  font-weight: 800;
  font-size: ${rem('24px')};
  line-height: ${rem('29px')};
  color: #000;
`

const titleS = `
  font-family: ${fonts.regular};
  font-weight: 800;
  font-size: ${rem('24px')};
  line-height: ${rem('29px')};
  color: #000;
`

const titleXS = `
  font-family: ${fonts.regular};
  font-weight: 800;
  font-size: ${rem('18px')};
  line-height: ${rem('22px')};
  color: #000;
`

const label = `
  font-family: ${fonts.regular};
  font-weight: 600;
  font-size: ${rem('14px')};
  line-height: ${rem('20px')};
  text-transform: uppercase;
  color: #000;
`

export default {
  text,
  titleXL,
  titleL,
  titleM,
  titleS,
  titleXS,
  label
}