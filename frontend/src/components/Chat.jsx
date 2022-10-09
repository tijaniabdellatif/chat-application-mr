
import React from 'react';

import userImage from '../images/stores/avatar-test.jpg';
import './chat.css';
import { Avatar,Typography } from '@mui/material';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ActiveFriends from './customs/ActiveFriends';
import People from './customs/People';
import RightSide from './customs/RightSide';
import Box from '@mui/material/Box';

const Chat = () => {
  return (

<Box className='messenger'>
<Box className='row'>
     <Box className='col-3'>
          <Box className='left-side'>
               <Box className='top'>
                    <Box className='image-name'>
                         <Box className='image'>
                             
                              <Avatar
                              alt="user image"
                              src={userImage}
                              sx={{ width: 56, height: 56 }}
                              />

                         </Box>
                         <Box className='name'>
                              <Typography variant="h5" pl={2} align="center" color="primary.dark">name</Typography>
                         </Box>
                    </Box>

                       <Box className='icons'>
                            <Box className='icon'>
                              <AlignHorizontalLeftIcon sx={{ color:"#F64D4B" }} fontSize='medium' />
                            </Box>
                            <Box className='icon'>
                                  <ModeEditOutlineTwoToneIcon sx={{ color:"#F64D4B" }} fontSize='medium' /> 
                            </Box>
                       </Box>
               </Box>

               <Box className='friend-search'>
                    <Box className='search'>
                    <button> <SearchOutlinedIcon   sx={{ color:"#00537D"}}/> </button>
                    <input type="text" placeholder='Search' className='form-control' />
                    </Box>

               </Box>

               <Box className='active-friends'>
                <ActiveFriends />
               </Box>

               <Box className='friends'>
                <Box className='hover-friend active'>

                    <People />
                    
                </Box>
                 <Box className='hover-friend'>

                    <People />
                    
                </Box>
                 <Box className='hover-friend '>

                    <People />
                    
                </Box>
                <Box className='hover-friend '>

                         <People />

                </Box>

                <Box className='hover-friend '>

                         <People />

                         </Box>
               <Box className='hover-friend '>

                         <People />

               </Box>
               
               </Box>

          </Box>

      </Box>


      <Box className='col-9'>
             
              <RightSide />
      </Box>


</Box>
</Box>
  )
};


export default Chat;