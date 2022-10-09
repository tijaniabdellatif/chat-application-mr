import React from 'react'
import {Box,Paper,InputBase,Divider,IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import userImage from '../../images/stores/avatar-test.jpg';


function SearchBar() {
  return (
    <Box sx={{width:'100%'}}>
        <Paper
            component="form"
            sx={{ mt:2, display: 'flex', 
             alignItems: 'center' ,
             borderRadius:5 ,mx:2 ,
            }}
            >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search conversation' }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>    
    </Box>
  )
}

export default SearchBar