import { useState } from 'react';
import React from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchPlaylist from '../SearchPlaylist/SearchPlaylist';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const [searchResults, setSearchResults] = useState(
    [{
      name: 'track1',
      artist: 'artist1',
      album: 'album1',
      id: 'id 1',
    },
    {
      name: 'track2',
      artist: 'artist2',
      album: 'album2',
      id: 'id 2',
    }]
  );
  return (
    <div className='appcontainer'>
      <div className = 'titlecontainer'>
            <h1 className='header'>
                Jammming
            </h1>
            <SearchBar />
      </div>
      <div className='appplaylist'>
          {/* Add a Search Playlist Component */}
          <SearchPlaylist data={searchResults} />
          
          
          {/* Add a Playlist component */}
          <Playlist />

        </div>
    </div>
  );
}

export default App
