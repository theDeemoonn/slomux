const defaultState = {
    counter: 1,
    stepSize: 1,
};

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'UPDATE_COUNTER':
            return {
                ...state,
                counter: state.counter + state.stepSize * action.payload
            };
        case 'CHANGE_STEP_SIZE':
            return {
                ...state,
                stepSize: action.payload
            };
        default:
            return state;
    }
}

export { defaultState, reducer };
