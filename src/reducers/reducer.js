import * as tipos from "../actions/action-types";

export default function reducer(state, action) {
    let newState = { ...state };

    switch (action.type) {
        case (tipos.ACT_INCREMENTAR):
            newState.contador += action.valor;
            break;
        case (tipos.ACT_DECREMENTAR):
            newState.contador -= action.valor
            break;
        case (tipos.ACT_RESET):
            newState.contador = 0;
            break;
        default:
            break;
    }

    return newState;
}