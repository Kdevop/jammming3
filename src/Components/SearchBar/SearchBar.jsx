import React from 'react';
import { useCallback, useState} from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const search = useCallback(()=> {
        props.onSearch(term);
    }, [props.onSearch, term]);

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

        const placeHolderText = 'Type in the name of a track';

        const handleKeyPress = useCallback((event) => {
            if(event.key === 'Enter') {
                search();
                setTerm({placeHolderText});
            }
        }, [search]);

    return (
        <div className= 'SearchBar'>
            <input 
            placeholder={placeHolderText}
            onChange={handleTermChange}
            onKeyPress={handleKeyPress}
            />
            <button className = 'searchbutton' onClick={search}>Search</button>
        </div>
    )
}

export default SearchBar;