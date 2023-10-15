const UPDATE_COUNTER = 'UPDATE_COUNTER';
const CHANGE_STEP_SIZE = 'CHANGE_STEP_SIZE';

const updateCounter = value => ({
    type: UPDATE_COUNTER,
    payload: value,
});

const changeStepSize = value => ({
    type: CHANGE_STEP_SIZE,
    payload: value,
});

export { UPDATE_COUNTER, CHANGE_STEP_SIZE, updateCounter, changeStepSize };
