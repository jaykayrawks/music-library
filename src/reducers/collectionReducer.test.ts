import collectionReducer from "./collectionReducer";
import { describe, it, expect } from 'vitest';
import {ACTIONS} from '../constants';

describe('collectionReducer', () => {
  const initialState = {
    songs: {},
    appliedFilters: {
      album: undefined,
      artist: undefined,
      groupBy: undefined,
      sortBy: undefined
    }
  };

  it('should return the initial state', () => {
    expect(collectionReducer(undefined, { type: 'UNKNOWN' })).toEqual(initialState);
  });

  it('should handle FILTER action', () => {
    const action = { type: ACTIONS.FILTER, payload: 'artist1' };
    const expectedState = {
      ...initialState,
      appliedFilters: { ...initialState.appliedFilters, artist: 'artist1' }
    };
    expect(collectionReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GROUPBY action', () => {
    const action = { type: ACTIONS.GROUPBY, payload: 'album' };
    const updatedSongs = {
      'album1': [{ title: 'Song1', artist: 'Artist1', album: 'Album1' }],
      'album2': [{ title: 'Song2', artist: 'Artist2', album: 'Album2' }]
    };
    const expectedState = {
      ...initialState,
      songs: updatedSongs,
      appliedFilters: { ...initialState.appliedFilters, groupBy: 'album' }
    };
    expect(collectionReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SORTBY action', () => {
    const action = { type: ACTIONS.SORTBY, payload: 'title' };
    const updatedSongs = {
      'album1': [{ title: 'Song1', artist: 'Artist1', album: 'Album1' }],
      'album2': [{ title: 'Song2', artist: 'Artist2', album: 'Album2' }]
    };
    const expectedState = {
      ...initialState,
      songs: updatedSongs,
      appliedFilters: { ...initialState.appliedFilters, sortBy: 'title' }
    };
    expect(collectionReducer(initialState, action)).toEqual(expectedState);
  });
});