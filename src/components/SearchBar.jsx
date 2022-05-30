import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router';
import { useStateContext } from '../contexts/StateContextProvider';
import "./Search.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();
  const { fetchData } = useStateContext();
  const [recent] = useState([]);
  const onSum = (value) => {
    setSearchTerm(value);
    // onhandleSubmit;
  }

  const onhandleSubmit = (e) => {
    e.preventDefault();
    history.push('/search');
    fetchData(`search?part=snippet&q=${searchTerm}`);
    if (!recent.includes(searchTerm)) {
      recent.push(searchTerm);
    }
  };

  return (
    <div className='search'>
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: 1,
        display: 'flex',
      }}
    >
      <input
        className='search-bar'
        placeholder='Search'
        value={searchTerm}
        onChange={(e) => {
          if (e.target.value !== null) {
            setSearchTerm(e.target.value);
          }
        }}
      />
      <IconButton type='submit' sx={{ p: '10px'}} aria-label='search'>
        <SearchIcon />
      </IconButton>
      
    </Paper>
    <div className='dropdown'>
        {recent.filter(item => {
          const searchT = searchTerm.toLowerCase();
          const term = item.toLowerCase();
          return searchT && term.startsWith(searchT)
        }).map((item) => <div onClick={() => onSum(item)} className='dropdown-row'>
          {item}
        </div>)}
      </div>
    </div>
  );
};

export default SearchBar;
