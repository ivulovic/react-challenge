import { useState } from "react"
import RealtimeTable from "../../components/RealtimeTable";
import formatRealtimeTableData from "../../shared/formatRealtimeTableData";
import getFavoriteSymbolsFromStorage from "../../shared/getFavoriteSymbolsFromStorage";

export default function Favorites(): JSX.Element {
  const [favorites] = useState(()=>getFavoriteSymbolsFromStorage())
  return <RealtimeTable symbols={favorites} dataFormatter={formatRealtimeTableData} />

}