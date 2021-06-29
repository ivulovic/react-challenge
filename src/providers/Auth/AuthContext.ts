import { createContext } from "react";
import noop from "../../utils/noop";

export interface IAuthContext {
  isLoggedIn: boolean,
  setAsLoggedIn: () => void,
}
const initialState = {
  isLoggedIn: false,
  setAsLoggedIn: noop,
}
const AuthContext = createContext<IAuthContext>(initialState);

export default AuthContext;