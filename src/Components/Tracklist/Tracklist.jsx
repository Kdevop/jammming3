import React from 'react';
import Track from '../Track/Track';
import  './Tracklist.css'

const Tracklist = (props) => {
    
    const results = props.data;
    console.log(props)
    
    return (
        <div className = 'Tracklist'>
            {/* here you will need to map over an array */}
            {/* there is an nested return element in the one from matey */}
           
            <p>This will be for the tracklists</p>          
            {/* {props.data.map((track) => {
                return (
                    <Track 
                    track={track}
                    key={track.id}
                    />
                )
            })} */}

        </div>
    );
}

export default Tracklist;
