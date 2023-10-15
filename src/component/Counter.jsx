
import { useCallback } from 'react';
import {useDispatch, useSelector} from "../store/StoreProvider.jsx";
import {updateCounter} from "../store/actions.js";

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = useCallback(
        () => dispatch(updateCounter(1)),
        [dispatch]
    );

    const handleDecrement = useCallback(
        () => dispatch(updateCounter(-1)),
        [dispatch]
    );

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span> {counter} </span>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
};

export default Counter;
