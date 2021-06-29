import {useEffect, useRef, useState} from 'react';
import { mapToEntity } from '../../utils/mapToEntity';
import noop from '../../utils/noop';
import {TradingPairs, providerURL} from './constants';

export default function useRealTimeData(tickerSymbols){
  const [, setTime] = useState();
  let state = useRef({});
  const ws = useRef(null);

  useEffect(() => {
    if(!tickerSymbols.length){
      return;
    }
    ws.current = new WebSocket(providerURL);
    ws.current.onopen = noop;
    ws.current.onclose = noop;
    ws.current.onmessage = onMessage;
    return () => {
      ws.current.close();
    };
  }, [tickerSymbols]);
  
  const subscribeToTickerSymbols = () => {
    for(let symbol of tickerSymbols){
      if(symbol){
        ws.current.send(JSON.stringify({ event: 'subscribe', channel: 'ticker', symbol: symbol}))
      }
    }
  }

  const onMessage = (event) => {
    // console.log("on msg")
    let data = JSON.parse(event.data);
    if(data.event === 'info'){
      state.current = {};
      setTime(Date.now());
      subscribeToTickerSymbols();
    }
    if(data.event === 'subscribed'){
        state.current = {
          ...state.current,
          ...mapToEntity(data, 'chanId'),
        };
    }
    if(!data.event){
      const isHeartbeat = data[1] === 'hb';

      if(!isHeartbeat){
        const [channelId, value] = data;
        const values = [value[TradingPairs.LAST_PRICE], value[TradingPairs.DAILY_CHANGE], value[TradingPairs.DAILY_CHANGE_PERC], value[TradingPairs.HIGH], value[TradingPairs.LOW], new Date().getTime()];
        
        const newObj = {
          [channelId]:{
            ...(state.current[channelId] || {}),
            values,
          }
        }

        state.current = {
          ...state.current,
          ...newObj,
        };

        setTime(Date.now());
      }
    }
  };

  return Object.values(state.current);
};
