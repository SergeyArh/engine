import { START_LOAD } from '../constants';
import { ActionStatus } from '../types';


export function status(state = 'idle', action: ActionStatus): string {
  if (action.type === START_LOAD) {
    return 'pending'
  }
  return state
}