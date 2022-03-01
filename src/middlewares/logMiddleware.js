
const logMiddleware = state => dispatch => action => {
    console.log("Accion Recibida:", action);
    console.log("Estado Antes del Reducer", state.getState());
    dispatch(action);
    console.log("Estado Despues del Reducer", state.getState());
}

export default logMiddleware;