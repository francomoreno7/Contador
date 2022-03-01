
const delayMiddleware = state => dispatch => action => {
    setTimeout(() => {
        dispatch(action);
    }, 2500);
}

export default delayMiddleware;