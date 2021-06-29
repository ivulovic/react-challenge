import { useState } from "react";

const getColumnAlign = (columns: any): any => {
  const result: Record<string, string> = {};
  columns.forEach((x: any) => {
    result[x.field] = x.align || '';
  })
  return result;
}

const defaultRenderer = (props: any) => {
  const {className, children} = props;
  return <div className={className}>{children}</div>
}; 
const returnAsIs = (v: any): any => v;

export default function Body(props: any): JSX.Element {
  const {data, columns, components, formatters} = props;
  const [columnAlign] = useState(()=> getColumnAlign(columns));

  const getFormatterForField = (field: string) => formatters[field] || returnAsIs;
  const getRendererForField = (field: string) => components[field] || defaultRenderer;

  const renderField = (row: any) => {
    const formatter = getFormatterForField(row.field);
    const Component = getRendererForField(row.field);
    const {item} = row;
    return  <Component key={`field-${item.id}-${row.field}`} {...item} className={`${columnAlign[row.field]}`} >{formatter(item[row.field])}</Component>
  }
  const renderRow = (x: any) => {
    const rows = columns.map((x: any) => x.field);
    const rowsToMap: Array<any> = [];
    Object.keys(x).forEach(key => {
      if(rows.includes(key)){
        rowsToMap.push({
          field: key,
          value: x[key],
          item: x,
        });
      }
    });
    return (
      <div className="row" key={x.id}>
        {rowsToMap.map(renderField)}
      </div>
    )
  }
   return <div className="body">
    {data.length ? data.map(renderRow) : <div className="row">No data.</div>}
     
  </div>
}