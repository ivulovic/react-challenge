import "./style.scss";

export default function Button(props: any){
  const {onClick, children, type='primary'} = props;

  return <button className={`button ${type}`} onClick={onClick}>{children}</button>
}