import { useContext } from "react";
import { Route } from "react-router-dom";
import AuthContext from "../../../providers/Auth/AuthContext";

const NonAuthenticated = () => <div>You'll have to login to access this page.</div>;

export default function PrivateRoute(props: any): JSX.Element {
  const {isLoggedIn} = useContext(AuthContext);
  const {component, ...rest} = props;

  const Component = isLoggedIn ? component : NonAuthenticated;
  return  <Route {...rest} render={props => (<Component {...props} />)} />
}