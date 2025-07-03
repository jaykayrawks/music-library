import {ACTIONS} from '../constants';
import data from '../data/data.json';
import {groupBy,sortBy} from '../utils';

type Action={
  type:string;
  payload:{key:string; value?:string};
}

const collectionReducer = function(state,action:Action){
  let currState = state;
  const {type,payload} = action;
  const {key,value}=payload; 
  let updatedList ={};
  let sdata = state.songs.collection;
      
  switch(type){
    case ACTIONS.FILTER:
    if(state.appliedFilters.groupBy){
      sdata = data.collection;
    }  
    if(payload){
        updatedList = {collection:sdata.filter(song=>song[key]===value)};
      }
      currState={...state,songs:updatedList,appliedFilters:{...state.appliedFilters,[key]:value}}
      
      break;
    case ACTIONS.GROUPBY:
      if(state.appliedFilters.groupBy){
        sdata = data.collection;
      }
      updatedList = groupBy(sdata,key);
      currState ={...state,songs:updatedList,appliedFilters:{...state.appliedFilters,groupBy:key}}
      break;
     case ACTIONS.SORTBY:
      updatedList = sortBy(state.songs,key);
      currState ={...state,songs:updatedList,appliedFilters:{...state.appliedFilters,sortBy:key}}
      break;    
  }
  return currState;
}

export default collectionReducer;