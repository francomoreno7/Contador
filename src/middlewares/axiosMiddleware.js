import axios from "axios";

const axiosMiddleware = state => dispatch => action => {
    //Lo que haria en realidad es primero la llamada asincronica 
    //y si salio bien despachar la accion, pero lo hago al revez
    //para simplificar el middleware
    dispatch(action);
    axios.put("http://localhost:3001/contador", state.getState());
}

export default axiosMiddleware;