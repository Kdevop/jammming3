import React from 'react';
import './Track.css'

const Track = (props) => {
    return (
        <div className='track'>
            <div className='trackinfo'>
                {/* <h3><!-- track name will go here --></h3> */}
                <h3>{props.track.name}</h3>
                {/* track artist and track album will go here */}
                <p>{props.track.artist}</p><p>{props.track.album}</p>
                
            </div>
                {/* Temp button */}
            <button className='trackaction'>+or-</button>
        </div>
    )
}

export default Track;