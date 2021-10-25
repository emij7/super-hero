import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import PaginaLogin from './pages/PaginaLogin';
import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.css';
import Buscador from "./pages/Buscador";
import MiEquipo from "./components/MiEquipo";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={PaginaLogin} />
          <Route exact path='/miEquipo' component={MiEquipo} />
          <Route exact path='/busqueda' component={Buscador} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
