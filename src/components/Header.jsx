import { useState } from 'react';
import { FaHome, FaSearch } from 'react-icons/fa'

export function Header({onSearchText}) {
    const [searchValue,setSearchValue] = useState('')

    const handleChangeText = (e) => {
        setSearchValue(e.target.value)
        onSearchText(e.target.value)
    }
    return (
    <header className='header'>
        <span> 
            <FaHome /> 
        </span>
          <h3>CC-todolist</h3>
          {/* Searchbar */}
            <div className='header_search_container'>
                <span className='header_search_icon'>
                    <FaSearch/>
                </span>
                <input
                    type="text"
                    className='header_search_input'
                    placeholder='search'
                    value={searchValue}
                    onChange={handleChangeText}
                />
            </div>
      </header>
    );
}