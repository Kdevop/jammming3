import { useState, useCallback } from 'react';
import React from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchPlaylist from '../SearchPlaylist/SearchPlaylist';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../util/Spotify/Spotify';

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

  const [playlistName, setPlaylistName] = useState('Enter Playlist Name');

  const [playlistTracks, setPlaylistTracks] = useState(
    [{
      name: 'example track1',
      artist: 'exmaple artist1',
      album: 'example album1',
      id: 'id1',
    },
    {
      name: 'example track2',
      artist: 'exmaple artist2',
      album: 'example album2',
      id: 'id2',
    },
  ]);

  const addTrack = (track)  => {
   const existingTrack = playlistTracks.find((t) => t.id === track.id);
   const newTrack = playlistTracks.concat(track);
   if(existingTrack) {
    alert('Track already inplaylist');
   } else {
    setPlaylistTracks(newTrack);
   }
  }

  const removeTrack = (track) => {
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existingTrack);
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((t) => t.urs);
    // more details on saving to sportify soon
  }

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  return (
    <div className='appcontainer'>
      <div className = 'titlecontainer'>
            <h1 className='header'>
                Jammming
            </h1>
            <SearchBar onSearch={search}/>
      </div>
      <div className='appplaylist'>
          {/* Add a Search Playlist Component */}
          <SearchPlaylist data={searchResults} onAdd={addTrack} onRemove={removeTrack}/>
          
          
          {/* Add a Playlist component */}
          <Playlist 
          name={playlistName} 
          userTracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onadd={addTrack}
          currentName={playlistName}
          onSave={savePlaylist}
          />

        </div>
    </div>
  );
}

export default App
