//import Contador from "./component/Contador";
import Contador from "./containers/contador";
import { Provider } from "react-redux";
import laVerdadSuprema from "./store/store";

function App() {
  return (
    <Provider store={laVerdadSuprema}>
      <Contador />
    </Provider>
  );
}

export default App;
