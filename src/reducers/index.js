import combineReducers from 'react-combine-reducers';

import CounterReducer, { counterDefaultState } from './CounterReducer';

export const [combined, combinedState] = combineReducers({
    counterReducer: [CounterReducer, counterDefaultState]
});