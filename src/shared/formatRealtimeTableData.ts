export default function formatRealtimeTableData(data: any){
  return data.map((symbol: any) => {
    const {chanId, pair, values} = symbol;
    const [last, change, changePercent, high, low /*, time */] = values;
    return {
      id: chanId,
      name: pair,
      last, change, changePercent, high, low
    }
  })
}