import './collection.css';
import { useReducer} from 'react';
import FilterOptions from '../../components/FilterOptions';
import SongCollection from '../../components/SongCollection';
import collectionReducer from '../../reducers/collectionReducer';
import data from '../../data/data.json';

const filters= {artists:[],albums:[]};
data.collection.forEach(item=>{
    const {artist,album} = item;
      if(!filters.artists.includes(artist)){
        filters.artists.push(artist);
      }
    

    if(!filters.albums.includes(album)){
      filters.albums.push(album)
    }
  });
  
const aFilters = {'album':undefined,'artist':undefined,groupBy:undefined,sortBy:undefined};
  export default function Collection({canEdit}:{canEdit:boolean}) {
  const [{songs,appliedFilters},dispatch]= useReducer(collectionReducer,{songs:data,appliedFilters:aFilters});
  
  return (<>
    <FilterOptions filters={filters} appliedFilters={appliedFilters} dispatch={dispatch}/>
    <SongCollection songs={songs} canEdit={canEdit}/>
  </>
  );
}