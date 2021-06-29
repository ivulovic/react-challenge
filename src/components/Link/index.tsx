import {NavLink} from 'react-router-dom';
import './style.scss';

export default function Link(props: any): JSX.Element {
  const {children, path} = props;
  return <NavLink className="link" to={path}>{children}</NavLink>
}