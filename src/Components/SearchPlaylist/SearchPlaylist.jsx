import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchPlaylist.css';
import Track from '../Track/Track';

const SearchPlaylist = (props) => {
    

    return (
        <div className = 'searchplaylist'>
            <h2>Results</h2>
            {/* Add a tracklist component */}

            <div className = 'Tracklist'>
            {/* here you will need to map over an array */}
            {/* there is an nested return element in the one from matey */}
           
                      
            {props.data.map((track) => {
                return (
                    <Track 
                    track={track}
                    key={track.id}
                    onAdd={props.onAdd}
                    isRemoval={false}

                    />
                )
            })}

        </div>
           
         
        </div>
    )
}

export default SearchPlaylist;