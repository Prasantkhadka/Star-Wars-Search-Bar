import React from 'react'
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const SearchBar = ({placeholder, data}) => {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter);    
        }
    }

    const clearInput = () => {
      setFilteredData([]);
    }

  return (
    <div className='SearchBar'> 
      <div className='searchInput'>
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
        <div className='searchIcon'>
          {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className='dataResult'>
        {filteredData.slice(0, 10).map((value, key) => {
            return <a className='dataItem' href={value.wiki} target="_blank">
                <p> {value.name} </p>
            </a>
        })}
      </div>
      )}
      
    </div>
  )
}

export default SearchBar
