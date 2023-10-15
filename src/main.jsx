import ReactDOM from 'react-dom';
import Step from "./component/Step.jsx";
import Counter from "./component/Counter.jsx";
import {defaultState, reducer} from "./store/reducers.js";
import {createStore, Provider} from "./store/StoreProvider.jsx";


const App = () => {
    const store = createStore(reducer, defaultState);


    return (

        <Provider store={store}>
            <Step />
            <Counter />
        </Provider>

    );
};

ReactDOM.render(<App />, document.getElementById('root'));


