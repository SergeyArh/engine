import { trains } from "./trains";
import { status } from "./status";
import { character } from "./character";
import { combineReducers } from 'redux';

export default combineReducers({
  trains,
  status,
  character
})