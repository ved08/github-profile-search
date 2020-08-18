import React from 'react';
import "./SearchBar.css"

const SearchBar = (props) => {
    return (
        <div>
            <input 
                className="Search" 
                type="text" 
                placeholder="Search"/>
            <button onClick={props.search}>Search Results</button>
        </div>
    )
};

export default SearchBar