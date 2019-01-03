import InitSteps from './InitSteps'
import SandBox from './SandBox'
import { combineReducers } from 'redux'

export default combineReducers({
  initSteps: InitSteps,
  sandBox: SandBox
})