import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';
import Track from '../Track/Track';

const Playlist = (props) => {
    
    const handleNameChange = ({target}) => {
        props.onNameChange(target.value);
    } 
    
    return (
        <div className='playlist'>
            <input defaultValue={props.currentName} className='playlistname' type='text' onChange={handleNameChange}/>
            {props.userTracks.map((track) => {
                return (
                    <Track 
                    track={track}
                    key={track.id}
                    onAdd={props.addTrack}
                    isRemoval={true}
                    onRemove={props.onRemove}
                    />
                )
            })}
            <button className='playlistsave' onClick={props.onSave}>Save to Spotify</button>
        </div>
    )
}

export default Playlist;