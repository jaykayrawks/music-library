import { useEffect, useLayoutEffect } from 'react'
import Collection from './components/Collection'
import data from './data/data.json';

function App() {
// set songs collection into localStorage
  useLayoutEffect(()=>{
    if(!localStorage.getItem('songs')){
      localStorage.setItem('songs',data);
    }
  },[]);
  return (
    <>
      <Collection />
    </>
  )
}

export default App
