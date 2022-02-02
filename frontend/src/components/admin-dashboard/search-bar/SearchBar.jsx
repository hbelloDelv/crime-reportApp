import React from 'react';
import './searchbar.css';
import { FaSearch } from 'react-icons/fa'


function SearchBar() {
    return (
        <div className="search-bar">
            <div className="searchbar-leftsection">
                {/* left section */}
            </div>
            <div className="searchbar-rightsection">
                <div className="searchbox-container">
                    <FaSearch className="searchIcon"/>
                    <input type="text" placeholder="Search crime..." className="searchInput"/>   
                </div>
            </div>
        </div>
    )
}

export default SearchBar
