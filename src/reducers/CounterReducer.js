export const counterDefaultState = { number: 0 };

export default function CounterReducer(state = counterDefaultState, action = {}) {
    console.log(action)
    switch(action.type) {
        case 'COUNTER_INC':
            return { ...state, number: state.number + 1 };
        case 'COUNTER_DEC':
            return { ...state, number: state.number - 1 };
        default:
            return state;
    }
};