import reducer from "./reducers/index";
import { createStore, applyMiddleware} from 'redux';
import { fetchTrainsThunk } from './fetchTrainsThunk';


const thunkMiddleware = storeApi => next => action => {
  if (typeof action === "function") {
    action(storeApi.dispatch, storeApi.getState);
    return;
  }
  return next(action);
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.dispatch(fetchTrainsThunk());

export default store