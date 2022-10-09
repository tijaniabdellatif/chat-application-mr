import React from 'react'
import userImage from "../../images/stores/avatar-test.jpg";
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const People = () => {
  return (
<Stack direction="row" spacing={2} sx={{ width:'100%' }} >

    <Box sx={{  marginRight: '8px',
    position: 'relative' }}>

      <Box className="image">
        <Avatar src={userImage} />
      </Box>
    </Box>

    <Box sx={{  width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center' }}>

        <Box sx={{ 

display: 'flex',
alignItems: 'flex-start',
justifyContent: 'center',
flexDirection: 'column'
         }}>

         <Typography variant="h6" color="primary.dark">Tijani</Typography>
         </Box>

    </Box>
  
</Stack>
  
  )
}

export default People;
