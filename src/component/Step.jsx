import { useCallback } from 'react';
import {useDispatch, useSelector} from "../store/StoreProvider.jsx";
import {changeStepSize} from "../store/actions.js";

const Step = () => {
    const stepSize = useSelector(state => state.stepSize);
    const dispatch = useDispatch();

    const handleChange = useCallback(
        ({ target }) => dispatch(changeStepSize(target.value)),
        [dispatch]
    );

    return (
        <div>
            <div>Значение счётчика должно увеличиваться или уменьшаться на заданную величину шага</div>
            <div>Текущая величина шага: {stepSize}</div>
            <input
                type="range"
                min="1"
                max="5"
                value={stepSize}
                onChange={handleChange}
            />
        </div>
    );
};

export default Step;
