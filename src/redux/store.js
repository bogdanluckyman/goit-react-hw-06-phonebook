import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  balance: {
    actor: 1,
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
