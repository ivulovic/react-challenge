export function mapToEntity (payload: any, key: string){
  if(!payload || !key) return {};
  return  {
    [payload[key]] : payload
  }
}
