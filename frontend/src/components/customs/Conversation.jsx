import React from 'react';
import Box from '@mui/material/Box';
import { Avatar,Typography } from '@mui/material';
import userImage from '../../images/stores/avatar-test.jpg';
import './css/conversation.css';

const Conversation = () => {
  return (
    <Box className="message-show">
        <Box className="my-message">
            <Box className='image-message'>
                <Box className="my-text">
                    <Typography variant="p" className="message-text">
                        How are you
                    </Typography>
                </Box>

            </Box>

            <Box className='time'>
                    2 jan 2022
            </Box>
        </Box>


        <Box className="fd-message">

             <Box className="image-message-time">
                
                <Box className="message-time">
                <Avatar src={userImage} />
                    <Box className='fd-text'>
                    <Typography variant="p" className="message-text">
                       Im fine
                    </Typography>
                    </Box>

                    <Box className="time">
                        3 jun 2022
                    </Box>
                </Box>

             </Box>
        </Box>

 
    </Box>
  )
}

export default Conversation
