import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectData, setData } from "./homeSlice";
import RealtimeTable from "../../components/RealtimeTable";
import formatRealtimeTableData from "../../shared/formatRealtimeTableData";

export default function Home(props: any): JSX.Element {
  const dispatch = useAppDispatch();
  const tableData = useAppSelector(selectData);

  useEffect(()=>{
    fetch('/bitfinex/symbols').then(res => res.json()).then(symbolsList => {
      dispatch((setData(symbolsList.slice(0, 5))))
    })
  }, []);

  const tickers = useMemo(()=> tableData.map(x => x.ticker), [tableData]);
  
  return <RealtimeTable symbols={tickers} dataFormatter={formatRealtimeTableData} />
}