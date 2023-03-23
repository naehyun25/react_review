import {createStore} from "redux";
import rootReducer from "./reduxReducers"

const store = createStore(rootReducer);

export default store;