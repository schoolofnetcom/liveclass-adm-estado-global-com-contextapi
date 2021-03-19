import React, { useContext } from 'react';
import { StoreContext } from './Store';

export default function CounterComponent() {
    const { state, dispatch } = useContext(StoreContext);
    console.log(state);
    return (
        <section className="counter-container">
            <div className="value">{state.counterReducer.number}</div>
            <button type="button" onClick={() => dispatch({ type: 'COUNTER_INC'})}>Add</button>
            <button type="button" onClick={() => dispatch({ type: 'COUNTER_DEC', payload: { info: 1 }})}>Sub</button>
        </section>
    );
};