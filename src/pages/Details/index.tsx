import { useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Button from "../../components/Button";
import Link from "../../components/Link";
import Table from "../../components/Table";
import AuthContext from "../../providers/Auth/AuthContext";
import getFavoriteSymbolsFromStorage from "../../shared/getFavoriteSymbolsFromStorage";
import {setData, selectData} from './detailsSlice';
import { columns, formatterHelpers, Errors } from "./helpers";
 
export default function Details(props: any): JSX.Element {
  const id = props.match.params.id;
  const [error, setError] = useState(false);
  const [favorites, setFavorites] = useState(()=>getFavoriteSymbolsFromStorage())
  const {isLoggedIn} = useContext(AuthContext);
  const data = useAppSelector(selectData);

  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    fetch(`/bitfinex/pubticker/${props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        if(data.message === Errors.UnknownSymbol){
          setError(true)
        } else {
          // if v2
          // const dataToSet = {
          //   last: data[TickerDetails.LAST_PRICE],
          //   high: data[TickerDetails.HIGH],
          //   low: data[TickerDetails.LOW],
          // }
          dispatch((setData(data)))
        }
      })
  }, []);

  const toggleFavorite = (e: any) => {
    let newFavorites = [];
    if(favorites.includes(id)){
      newFavorites = favorites.filter((x: any) => x !== id);
    } else {
      newFavorites = [...favorites, id];
    }
    setFavorites(newFavorites);
    localStorage.setItem("favoriteSymbols", JSON.stringify(newFavorites));
  }

  const rows = [{ name: props.match.params.id, ...data }];

  const isInFavorite = favorites.includes(id);
  if(error){
    return <div>Error occured. <Link className="link" path="/">Go home.</Link></div>
  }
  if(!data){
    return <></>
  }
  console.log(data)
  return <div>
    <Table columns={columns} rows={rows} formatters={formatterHelpers}/>
    {isLoggedIn && (
      <div>
        <Button onClick={toggleFavorite} type={isInFavorite ? 'error':'primary'}>{isInFavorite ? 'Remove from' : 'Add to'} favorites</Button>
      </div>
    )}
  </div>
}