import React from 'react'
import { Icons } from '../icons/icons'

import './_searchBar.scss'
function SearchBar({ value, onChange, placeholder = "Rechercher..." }) {
    return (
        <div className="search-bar">
            <Icons.Search className="search-icon" />
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="search-input"
            />

        </div>
    )
}

export default SearchBar
