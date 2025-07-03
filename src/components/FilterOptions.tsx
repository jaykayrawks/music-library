import {ACTIONS} from '../constants';
import Select from './Select';

type FilterOptions = {
  filters: {
    artists: string[];
    albums: string[];
  };
  appliedFilters: {
    album?: string;
    artist?: string;
    groupBy?: string;
    sortBy?: string;
  };
  dispatch: React.Dispatch<{ type: string; payload: {key:string,value?: string} }>;
};

type Etype= React.ChangeEvent<HTMLSelectElement>; 
const Filters =({filters,dispatch}:FilterOptions)=>{

  const {artists,albums} = filters;
  
  const filterByArtist=(e:Etype)=>{
    dispatch({type:'filter',payload:{key:'artist',value:e.target.value}});
    console.log(e.target.value)
  }

  const filterByAlbum=(e:Etype)=>{
    dispatch({type:'filter',payload:{key:'album',value:e.target.value}});
    console.log(e.target.value)
  }
  const sortBy =  (e:Etype)=> dispatch({type:ACTIONS.SORTBY,payload:{key:e.target.value}});
  const groupBy = (e:Etype)=> dispatch({type:ACTIONS.GROUPBY,payload:{key:e.target.value}});
    return <div className='flex collection-filters'>
        
  
  <h2>filter By </h2>
  <Select label="Artist" options={artists} onChange={filterByArtist}/>
  <Select label="Album" options={albums} onChange={filterByAlbum}/>
  
  <Select onChange={sortBy} label="Sort By" options={['artist','album','title']} />
  <Select onChange={groupBy} label="Group By" options={['artist','album']}  />
  
</div>
}

export default Filters;