import { GET_TRAINS } from '../constants';
import { Train, ActionTrains } from '../types';

export function trains(state: Train[] = [], action: ActionTrains): Train[] {
  if (action.type === GET_TRAINS) {
    return action.trains
  }
  return state
}