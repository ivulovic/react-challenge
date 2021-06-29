import { useState } from "react";
import AuthContext from "./AuthContext";

const getStatusFromLocalStorage = () => localStorage.getItem("isLoggedIn") === 'true';

export default function AuthProvider(props: any): JSX.Element {
  const {children} = props;
  const [isLoggedIn, setIsLoggedIn] = useState(() => getStatusFromLocalStorage());

  const setAsLoggedIn = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  }
  
  return <AuthContext.Provider value={{isLoggedIn, setAsLoggedIn}}>
            {children}
         </AuthContext.Provider>
}