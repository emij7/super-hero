import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import PaginaLogin from './pages/PaginaLogin';
import MiEquipo from './pages/MiEquipo';
import Layout from "./components/Layout";
import { TokenProvider } from "./context/TokenContext";

function App() {
  return (
    <Router>
      <Layout>
        <TokenProvider>
          <Switch>
            <Route exact path='/' component={PaginaLogin} />
            <Route exact path='/miEquipo' component={() => <MiEquipo />} />
          </Switch>
        </TokenProvider>
      </Layout>
    </Router>
  );
}

export default App;
