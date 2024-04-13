import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

const Playlist = () => {
    return (
        <div className='playlist'>
            <input defaultValue='Type name of playlist' className='playlistname' />
            <Tracklist />
            <button className='playlistsave'>Save to Spotify</button>
        </div>
    )
}

export default Playlist;