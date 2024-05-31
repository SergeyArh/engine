import { Train, ActionCharacter } from '../types';
import { CURRENT_TRAIN, CHANGE_ENGINE, CHANGE_FORCE, CHANGE_SPEED} from '../constants';

const init = {
  name: '',
  description: '',
  characteristics: [],
  id: 0
}

export function character(state: Train = init, action: ActionCharacter): Train {
  
  if (action.type === CURRENT_TRAIN) {
    return action.train!
  }
  if (action.type === CHANGE_ENGINE) {
    const res = state.characteristics!.find(item => String(item.engineAmperage) === String(action.prev));
    const newRes = {
      ...res,
      engineAmperage: action.engine
    }
    return {
      ...state,
      characteristics: state.characteristics!.map(train => {
        if (String(train.engineAmperage) === String(action.prev)) {
          return newRes
        }
        return train
      })
    }
  }
  if (action.type === CHANGE_FORCE) {
    const res = state.characteristics!.find(item => String(item.force) === String(action.prev));
    const newRes = {
      ...res,
      force: action.force
    }
    return {
      ...state,
      characteristics: state.characteristics!.map(train => {
        if (String(train.force) === action.prev) {
          return newRes
        }
        return train
      })
    }
  }
  if (action.type === CHANGE_SPEED) {
    const res = state.characteristics!.find(item => String(item.speed) === String(action.prev));
    const newRes = {
      ...res,
      speed: action.speed
    }
    return {
      ...state,
      characteristics: state.characteristics!.map(train => {
        if (String(train.speed) === action.prev) {
          return newRes
        }
        return train
      })
    }
  }
  return state
}