import React from 'react'
import {Box,Autocomplete,TextField} from '@mui/material'

function SearchBar2(props) {


  return (
    <Box sx={{width:'100%',m:1}}>
        <Autocomplete
          freeSolo
          options={props.searchResults.map((option) => option.title)}
          renderInput={(params) =>
            
            <TextField {...params} label="Search.." />
          
          }
        />
    </Box>
  )
}

export default SearchBar2