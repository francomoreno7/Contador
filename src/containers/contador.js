import { connect } from "react-redux";
import Contador from "../component/contador";
import * as creators from "../actions/action-creator";


function mapStateToProps(state) {
    return {
        valor: state.contador
    }
}

// El dispatch seria una funcion que recibe 
// una accion y la hace llegar al reducer
function mapDispatchToProps(dispatch) {
    return {
        inc: () => {
            let accion = creators.actIncrementar(1);
            dispatch(accion);
        },
        dec: () => {
            let accion = creators.actDecrementar(1);
            dispatch(accion)
        },
        reset: () => {
            let accion = creators.actReset();
            dispatch(accion);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contador);