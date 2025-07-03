import utils from "./utils";
import { describe, it, expect } from 'vitest';

describe('utils', () => {
  it('should groupBy correctly', () => {
    const data = [
      { artist: 'Artist1', album: 'Album1', title: 'Song1' },
      { artist: 'Artist1', album: 'Album2', title: 'Song2' },
      { artist: 'Artist2', album: 'Album1', title: 'Song3' }
    ];
    const grouped = utils.groupBy(data, 'artist');
    expect(Object.keys(grouped)).toEqual(['Artist1', 'Artist2']);
    expect(grouped['Artist1'].length).toBe(2);
    expect(grouped['Artist2'].length).toBe(1);
  });

  it('should sortBy correctly', () => {
    const data = [
      { artist: 'Artist1', album: 'Album1', title: 'SongB' },
      { artist: 'Artist1', album: 'Album2', title: 'SongA' },
      { artist: 'Artist2', album: 'Album1', title: 'SongC' }
    ];
    const sorted = utils.sortBy(data, 'title');
    expect(sorted[0].title).toBe('SongA');
    expect(sorted[1].title).toBe('SongB');
    expect(sorted[2].title).toBe('SongC');
  });
});
