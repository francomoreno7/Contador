import * as tipos from "./action-types"
import axios from "axios"

export function actIncrementar(incremento) {
    return function (dispatch, getState) {
        dispatch({
            type: tipos.ACT_INCREMENTAR,
            valor: incremento
        });
        axios.put("http://localhost:3001/contador", getState());
    }
}

export function actDecrementar(decremento) {
    return function (dispatch, getState) {
        dispatch({
            type: tipos.ACT_DECREMENTAR,
            valor: decremento
        });
        axios.put("http://localhost:3001/contador", getState());
    }
}
 
export function actReset() {
    return function (dispatch, getState) {
        dispatch({
            type: tipos.ACT_RESET,
        });
        axios.put("http://localhost:3001/contador", getState());
    }
}