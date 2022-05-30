import React from 'react';

import { Typography, Box } from '@mui/material';
// import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import "./navBar.css"

const Navbar = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      p: 2,
      pt: 1,
      // borderBottom: '1px solid #e3e3e3',
      top: 0,
      left: 0,
      background: 'white',
      gap: '10',
      width: '100%',
      zIndex: 100,
    }}>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 25, color: 'black', fontWeight: 800, }}>
        <img
            src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
            alt=''
            className='header__logo'
            style={{
              width: '50px',
            }}
         />
         YouTube
        </Typography>
      </Link>
    </Box>
  );
};

export default Navbar;
