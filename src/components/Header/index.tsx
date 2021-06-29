import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import AuthContext from '../../providers/Auth/AuthContext';
import Button from '../Button';
import "./style.scss";

export default function Header(): JSX.Element {
  const {isLoggedIn, setAsLoggedIn} = useContext(AuthContext);
  return <header className="header">
    <div>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        {isLoggedIn && <>
          <li><NavLink to="/favorites">Favorites</NavLink></li>
        </>}
      </ul>
    </div>
    <div>
      {!isLoggedIn && <>
        <Button onClick={setAsLoggedIn}>Login</Button>
      </>}
    </div>
  </header>
}