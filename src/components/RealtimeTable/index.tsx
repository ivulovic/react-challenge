import useRealTimeData from "../../pages/Home/useRealtimeData";
import formatNumber from "../../utils/formatters/formatNumber";
import formatPercentage from "../../utils/formatters/formatPercentage";
import Link from "../Link";
import Table from "../Table";

const columns = [
  {field: 'name', label: 'Name'},
  {field: 'last', label: 'Last', align: 'right'},
  {field: 'change', label: 'Change', align: 'right'},
  {field: 'changePercent', label: 'Change Percent', align: 'right'},
  {field: 'high', label: 'High', align: 'right'},
  {field: 'low', label: 'Low', align: 'right'},
];

const components = {
  name: (props: any) => <Link path={`/details/${props.name}`}>{props.children}</Link>,
}

const formatterHelpers = {
  last: formatNumber,
  change: formatNumber,
  changePercent: formatPercentage,
  high: formatNumber,
  low: formatNumber,
}

export default function RealtimeTable(props: any){
  const {symbols, dataFormatter } = props;
  const data = useRealTimeData(symbols);
  const rows = dataFormatter(data);
  return <div>
    <Table 
      columns={columns} 
      rows={rows} 
      components={components} 
      formatters={formatterHelpers}
    />
  </div>
}