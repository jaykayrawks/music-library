import { useReducer, useState} from 'react';
import {collection } from './data.json';
// https://raw.githubusercontent.com/mhollingshead/billboard-hot-100/main/recent.json

const SongInfo = ({song,album,artist})=>{

  return <div className="song" >
    <span>{song}</span>
    <span>{album}</span>
    {/* <span>{artist[0]}</span> */}
    </div>
}
const Filters =({state,dispatch})=>{

  const {artists,albums} = state;
  const changeHandler=(e)=>{
    dispatch({type:'filter',payload:e.target.value});
    console.log(e.target.value)
  }

    return <>
    <select  onChange={changeHandler}  >
        {artists.map((v,k)=><option key={k} value={v}>{v}</option>)}
      </select>

      <select  onChange={changeHandler}>
      {albums.map((v,k)=><option key={k} value={v}>{v}</option>)}
      </select>
    </>    
     

}
const Options =()=>{
const [toggleFilters,setToggleFilters] = useState(false);
  return <>
<button onClick={()=>setToggleFilters(!toggleFilters)}> filters </button>

{toggleFilters &&  <Filters state={filters} applied={appliedFilters} dispatch={dispatch}/> }
  Sort By:
  <select >
    {['artist','album'].map((v,k)=><option key={k} value={v}>{v}</option>)}
  </select>
  Group By:
  <select >
    {['artist','album'].map((v,k)=><option key={k} value={v}>{v}</option>)}
  </select>

</>
}

const ACTIONS={
  FILTER:'filter',
  SORT:'sort'
}
const collectionReducer = function(initialState,action){
  const {songs,appliedFilters} = initialState;
  
  switch(action.type){
     case ACTIONS.FILTER:

      return {appliedFilters,songs:collection.filter(({album})=>(album==action.payload))};
      
    // case ACTIONS.SORT:
    //     console.log("state")
    //         return  initialState//.sort((a,b)=>a[action.payload].charCodeAt(0)-b[action.payload].charCodeAt(0))
    //   break;
  }
  return  initialState;
}
 const artists =[];
  const albums = []
  
  collection.forEach(item=>{
    const {artist,album} = item;
    artist.forEach(b=>{
      if(!artists.includes(b)){
        artists.push(b);
      }
    });

    if(!albums.includes(album)){
      albums.push(album)
    }
  })
const filters= {artists,albums};

export default function Collection() {
  const [{songs,appliedFilters},dispatch]= useReducer(collectionReducer,{songs:collection,appliedFilters:{'album':undefined,'artist':''}});
  
  return (
    <>
    <Options />
    
    {songs.map((v)=><SongInfo key={v.rank} {...v} />)}
  </>
  );
}