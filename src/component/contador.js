import "bootstrap/dist/css/bootstrap.css"

const Contador = (props) => {
    return (<div className="w-25 m-auto bg-primary text-light text-center p-2 rounded shadow mt-5">
        <h4 className="display-4">Contador</h4>
        <div>
            <div className="badge bg-secondary p-2 m-auto mb-2">{props.valor}</div>
        </div>
        <div className="btn-group">
            <button className="btn btn-secondary" onClick={() => { props.inc() }}>
                +
            </button>
            <button className="btn btn-warning" onClick={() => { props.reset() }}>
                Reset
            </button>
            <button className="btn btn-danger" onClick={() => { props.dec() }}>
                -
            </button>
        </div>
    </div>);
}

export default Contador;  