import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';

const configureStore = () => {
  return createStore (
    rootReducer,
    applyMiddleware()
  );
};

export default configureStore;
