import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import PaginaLogin from './pages/PaginaLogin';
import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.css';
import Buscador from "./pages/Buscador";
import MiEquipo from "./components/MiEquipo";
import { createStore } from 'redux'
import { Provider } from "react-redux";
import { heroReducer } from './reducers/heroReducer'
const store = createStore(heroReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Router>
      <Layout>
        <Provider store={store}>
          <Switch>
            <Route exact path='/' component={PaginaLogin} />
            <Route exact path='/miEquipo' component={MiEquipo} />
            <Route exact path='/busqueda' component={Buscador} />
          </Switch>
        </Provider>
      </Layout>
    </Router>
  );
}

export default App;
