import formatNumber from "../../utils/formatters/formatNumber";

export const columns = [
  {field: 'name', label: 'Symbol'},
  {field: 'last_price', label: 'Last price', align: 'right'},
  {field: 'high', label: 'High', align: 'right'},
  {field: 'low', label: 'Low', align: 'right'},
];

export const formatterHelpers = {
  last_price: formatNumber,
  high: formatNumber,
  low: formatNumber,
}

export const Errors = {
  UnknownSymbol: 'Unknown symbol'
}

// for v2

// export const TickerDetails = {
//   BID: 0, 
//   BID_SIZE: 1, 
//   ASK: 2, 
//   ASK_SIZE: 3, 
//   DAILY_CHANGE: 4, 
//   DAILY_CHANGE_RELATIVE: 5, 
//   LAST_PRICE: 6, 
//   VOLUME: 7, 
//   HIGH: 8, 
//   LOW: 9
// }