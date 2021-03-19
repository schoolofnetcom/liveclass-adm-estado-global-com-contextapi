import React, { createContext, useReducer } from 'react';
import { combined, combinedState } from './reducers';

export const StoreContext = createContext(null);

export default function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(combined, combinedState);
    const value = { state, dispatch };
    return (
        <StoreContext.Provider value={value}>
            { children }
        </StoreContext.Provider>
    );
};

/**
 * CONTAINER (STORECONTEXT.PROVIDER)
 *     - user (REDUCER)
 *     - profile (REDUCER)
 *     - order (REDUCER)
 *     - counter (REDUCER)
 */