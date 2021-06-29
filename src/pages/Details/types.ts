export interface DetailsSliceState {
  data: SymbolInfo | null;
}

export interface SymbolInfo {
  name: string;
  last_price: string;
  high: string;
  low: string;
}