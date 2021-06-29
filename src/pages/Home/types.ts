export interface HomeSliceState {
  symbols: Array<SymbolData>;
}

export interface SymbolData {
  name: string;
  ticker: string;
  isChecked: boolean;
}