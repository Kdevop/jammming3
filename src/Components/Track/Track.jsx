import React from 'react';
import './Track.css'

const Track = (props) => {
    
    const makeButton = () => {
        if(props.isRemoval) {
            return (
                <button className='trackaction' onClick={passTrackToRemove}>-</button>
            )
        } else { return (
            <button className ='trackaction' onClick={passTrack}>+</button>
        )}
    }

    function passTrack() {
        props.onAdd(props.track);
    }



    function passTrackToRemove() {
        props.onRemove(props.track);
    }
    
    return (
        <div className='track'>
            <div className='trackinfo'>
                {/* <h3><!-- track name will go here --></h3> */}
                <h3>{props.track.name}</h3>
                {/* track artist and track album will go here */}
                <p>{props.track.artist}</p><p>{props.track.album}</p>
                
            </div>
                {/* Temp button */}
            {/* <button className='trackaction'>+or-</button> */}
            {makeButton()}
        </div>
    )
}

export default Track;