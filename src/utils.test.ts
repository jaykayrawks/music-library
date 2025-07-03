import {groupBy,sortBy} from "./utils";
import { describe, it, expect } from 'vitest';

describe('utils', () => {
  it('should groupBy correctly', () => {
    const data = [
      { artist: 'Artist1', album: 'Album1', title: 'Song1' },
      { artist: 'Artist1', album: 'Album2', title: 'Song2' },
      { artist: 'Artist2', album: 'Album1', title: 'Song3' }
    ];
    const grouped = groupBy(data, 'artist');
    expect(Object.keys(grouped)).toEqual(['Artist1', 'Artist2']);
    expect(grouped['Artist1'].length).toBe(2);
    expect(grouped['Artist2'].length).toBe(1);
  });

  it('should sortBy correctly', () => {
    const data = {collection:[
      { artist: 'Artist1', album: 'Album1', title: 'SongB' },
      { artist: 'Artist1', album: 'Album2', title: 'SongA' },
      { artist: 'Artist2', album: 'Album1', title: 'SongC' }
    ]};
    const sorted = sortBy(data, 'title');
    
    expect(sorted.collection[0].title).toBe('SongA');
    expect(sorted.collection[2].title).toBe('SongC');
  });
});
