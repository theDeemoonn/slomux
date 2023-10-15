import { createContext, useContext, useReducer, memo } from 'react';

const StoreContext = createContext();

const createStore = (reducer, initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return { state, dispatch };
};

const useSelector = selector => {
    const { state } = useContext(StoreContext);
    return selector(state);
};

const useDispatch = () => {
    const { dispatch } = useContext(StoreContext);
    return dispatch;
};

const Provider = memo(({ store, children }) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
});

export { createStore, useSelector, useDispatch, Provider };
