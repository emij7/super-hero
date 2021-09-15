import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import PaginaLogin from './pages/PaginaLogin';
import MiEquipo from './pages/MiEquipo';
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={PaginaLogin} />
          <Route exact path='/MiEquipo' component={() => <MiEquipo autorizacion={false} />} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
