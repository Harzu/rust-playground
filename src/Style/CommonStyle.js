import styled from 'styled-components'
import { rem } from 'polished'
import { media, Colors } from '../Themes'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 ${rem('8px')} 0 transparent;
  overflow-x: hidden;
  overflow-y: auto;
`

export const BodyWrapper = styled.div`
  padding: 0 ${rem('20px')};
  display: flex;
  height: calc(100vh - ${rem('113px')});
  color: ${Colors.white};
  background-color: ${Colors.resultBlack}
`

export const ScreenContainer = styled.div`
  display: block;
  height: 100%;
`

export const Container = styled.div`
  max-width: ${rem('1220px')};
  margin: 0 auto;
  padding-left: ${rem('20px')};
  padding-right: ${rem('20px')};
  ${media.s`
    padding-left: ${rem('34px')};
    padding-right: ${rem('34px')};
  `};
  ${media.l`
    padding-left: 0;
    padding-right: 0;
  `};
`

export const Section = styled.section`
  position: relative;
  padding-top: ${rem('60px')};
  padding-bottom: ${rem('60px')};
  ${media.s`
    padding-top: ${rem('80px')};
    padding-bottom: ${rem('80px')};
  `};
  ${media.l`
    padding-top: ${rem('130px')};
    padding-bottom: ${rem('130px')};
  `};
`

export const GridColumns = styled.ul`
  display: block;
  margin: 0 0 -${rem('40px')};
  padding: 0;
  list-style: none;
  ${media.s`
    margin: 0 -${rem('16px')} -${rem('60px')};
  `};
  ${media.l`
    margin: 0 -${rem('20px')} -${rem('80px')};
  `};
`

export const GridFourColumnsItem = styled.li`
  display: inline-block;
  width: 100%;
  margin: 0;
  padding: 0 0 ${rem('40px')};
  box-sizing: border-box;
  ${media.s`
    width: 50%;
    padding: 0 ${rem('16px')} ${rem('60px')};
  `};
  ${media.l`
    width: 25%;
    padding: 0 ${rem('20px')} ${rem('80px')};
    &:nth-of-type(2n){
      margin-left: 0;
    }
  `};
`

export const GridThreeColumnsItem = styled.li`
  display: inline-block;
  width: 100%;
  margin: 0;
  padding: 0 0 ${rem('40px')};
  box-sizing: border-box;
  ${media.s`
    width: 50%;
    padding: 0 ${rem('16px')} ${rem('60px')};
  `};
  ${media.l`
    width: 33.3%;
    padding: 0 ${rem('20px')} ${rem('80px')};
    &:nth-of-type(2n){
      margin-left: 0;
    }
  `};
`

export const GridTwoColumnsItem = styled.li`
  display: inline-block;
  width: 100%;
  margin: 0;
  padding: 0 0 ${rem('40px')};
  box-sizing: border-box;
  ${media.s`
    padding: 0 ${rem('16px')} ${rem('60px')};
  `};
  ${media.l`
    width: 50%;
    padding: 0 ${rem('20px')} ${rem('80px')};
  `};
`