import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/reducer";
import thunk from "redux-thunk";
//import logMiddleware from "../middlewares/logMiddleware";
//import delayMiddleware from "../middlewares/delayMiddleware";
//import axiosMiddleware from "../middlewares/axiosMiddleware";

export const defaultData = {
    contador: 0
} 

export default createStore(reducer, defaultData, applyMiddleware(thunk));

//export default createStore(reducer, defaultData, applyMiddleware(delayMiddleware, logMiddleware, axiosMiddleware));