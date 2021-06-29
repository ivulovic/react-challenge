import {BrowserRouter, Redirect, Switch } from "react-router-dom";
import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import Favorites from './pages/Favorites';
import Header from './components/Header';

import PrivateRoute from "./components/Router/PrivateRoute";
import PublicRoute from "./components/Router/PublicRoute";

import AuthProvider from './providers/Auth';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div>
          <Header />
          <div className="page-body">
            <Switch>
              <PublicRoute path="/details/:id" component={Details} />
              <PublicRoute path="/details" render={() => <Redirect to="/" />} />
              <PrivateRoute path="/favorites" component={Favorites} />
              <PublicRoute exact path="/" component={Home} />
              <PublicRoute component={NotFound} />
            </Switch>
          </div>
      </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
