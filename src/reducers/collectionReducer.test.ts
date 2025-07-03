import collectionReducer from "./collectionReducer";
import { describe, it, expect } from 'vitest';
import {ACTIONS} from '../constants';

describe('collectionReducer', () => {
  const initialState = {
    songs: {collection:[]},
    appliedFilters: {
      album: undefined,
      artist: undefined,
      groupBy: undefined,
      sortBy: undefined
    }
  };

  // it('should return the initial state', () => {
  //   expect(collectionReducer(initialState, { type: 'UNKNOWN',payload:{key:''} })).toEqual(initialState);
  // });

  it('should handle FILTER action', () => {
    const action = { type: ACTIONS.FILTER, payload: {key:'artist',value:'Artist1'} };
    const state = {...initialState,
      songs:{collection:[
        { title: 'Song3', artist: 'Artist1', album: 'Album1' },
        { title: 'Song2', artist: 'Artist2', album: 'Album2' },
       { title: 'Song1', artist: 'Artist1', album: 'Album1' }]
      }
    }
    const expectedState = {
      ...state,
      songs:{collection:[
        { title: 'Song3', artist: 'Artist1', album: 'Album1' },
        { title: 'Song1', artist: 'Artist1', album: 'Album1' }
      ]
      },
      appliedFilters: { ...initialState.appliedFilters, artist: 'Artist1' }
    };
    expect(collectionReducer(state, action)).toEqual(expectedState);
  });

   it('should handle GROUPBY action', () => {
     const action = { type: ACTIONS.GROUPBY, payload: {key:'album'} };
     const state = {...initialState,
      songs:{collection:[
        { title: 'Song3', artist: 'Artist1', album: 'Album1' },
        { title: 'Song2', artist: 'Artist2', album: 'Album2' },
       { title: 'Song1', artist: 'Artist1', album: 'Album1' }]
      }
    }
    const updatedSongs = {
      'Album1': [{ title: 'Song3', artist: 'Artist1', album: 'Album1' },
        { title: 'Song1', artist: 'Artist1', album: 'Album1' }],
      'Album2': [{ title: 'Song2', artist: 'Artist2', album: 'Album2' }]
    };
    const expectedState = {
      ...initialState,
      songs: updatedSongs,
      appliedFilters: { ...initialState.appliedFilters, groupBy: 'album' }
    };
    expect(collectionReducer(state, action)).toEqual(expectedState);
  });

  it('should handle SORTBY action', () => {
    const action = { type: ACTIONS.SORTBY, payload: {key:'title'} };
    const state = {...initialState,
      songs:{collection:[
        { title: 'Song3', artist: 'Artist1', album: 'Album1' },
        { title: 'Song2', artist: 'Artist2', album: 'Album2' },
       { title: 'Song1', artist: 'Artist1', album: 'Album1' }]
      }
    }

    const updatedSongs = [
        { title: 'Song1', artist: 'Artist1', album: 'Album1' },
        { title: 'Song2', artist: 'Artist2', album: 'Album2' },
       { title: 'Song3', artist: 'Artist1', album: 'Album1' }]
      
    const expectedState = {
      ...initialState,
      songs: {collection:updatedSongs},
      appliedFilters: { ...initialState.appliedFilters, sortBy: 'title' }
    };
    expect(collectionReducer(state, action)).toEqual(expectedState);
  });
});