export default function Header(props: any): JSX.Element {
  const {data} = props;
  return <div className="header">
     <div className="row bold">
      {data.map((x: any) => <div key={x.field} className={`${x.align}`}>{x.label}</div>)}
    </div>
  </div>
}