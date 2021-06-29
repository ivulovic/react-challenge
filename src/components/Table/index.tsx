import Header from "./Header";
import Body from "./Body";
import './style.scss';

export default function Table(props: any): JSX.Element {
  const {columns = [], rows = [], components = {}, formatters = {}} = props;
  return <div className="table">
    <Header data={columns} />
    <Body data={rows} columns={columns} components={components} formatters={formatters} />
  </div>
}