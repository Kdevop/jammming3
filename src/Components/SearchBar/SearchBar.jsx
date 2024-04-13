import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className = 'SearchBar'>
            <input placeholder ='Tpye in the name of a track'/>
            <button className = 'searchbutton'>Search</button>
        </div>
    )
}

export default SearchBar;