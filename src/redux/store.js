import reWorld from "./reducers/reWorld";
import reCountries from './reducers/reCountries'
import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";

const reducers = combineReducers({
        reWorld,
        reCountries
    }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store;