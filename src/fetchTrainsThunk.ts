import { fetchTrains } from "./fetchTrains";
import { Train } from './types';
import { ActionThunk, ActionStatus, ActionTrains, ActionCharacter } from './types';

function startLoadData() {
  return {type: "START_LOAD"}
}

function loadingFailed() {
  return {type: "LOADING_FAILED"}
}

function getTrains(trains: Train[]): ActionThunk  {
  return {
    type: "GET_TRAINS",
    trains: trains
  };
}

export const fetchTrainsThunk = () => (dispatch: any) => {
  dispatch(startLoadData());
  fetchTrains().then(response => {
    const trains = response.trains.map((train: Train, i: number) => {
      return {
        ...train,
        id: i
      }
    })
    dispatch(getTrains(trains))
  }, 
  () => {
    dispatch(loadingFailed());
  })
}