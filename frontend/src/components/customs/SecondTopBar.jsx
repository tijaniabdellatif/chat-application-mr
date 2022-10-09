import React from 'react'
import {Box,Avatar,Typography} from '@mui/material'
import userImage from '../../images/stores/avatar-test.jpg';
import CircleIcon from '@mui/icons-material/Circle';
import IconButton from '@mui/material/IconButton'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';

function SecondTopBar() {
  return (
    <Box sx={{width:'100%',boxShadow:3}}>
        <Box sx={{ display: 'flex',bgcolor:'#525E75',height:70}}>

                <Box sx={{ display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    
                    <Box sx={{mx:1}}>
                        <Avatar src={userImage} sx={{ height:'60px',width:"60px"}} />
                    </Box>
                    <Box sx={{m:1}}>
                        <Typography sx={{fontWeight:500,letterSpacing:2}} variant="h6" fontSize='1rem' color='primary.light'>Tijani abdelatif</Typography>
                        <Typography sx={{fontSize:'15px',color:'primary.light',display:'flex',alignItems:'center'}}
                            variant="h6">Status 
                        <CircleIcon fontSize='13px' sx={{color:'primary.green',mx:1}} />
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{display:'flex',ml:'auto',mr:1,bgcolor:'secondary.main',borderRadius:5,boxShadow:3}}>
                    <IconButton sx={{ml:2}} color="primary" aria-label="Voice call" component="span">
                        <LocalPhoneOutlinedIcon sx={{color:'primary.green',transition:'all .5s','&:hover':{width:'32px',height:'32px'}}} />
                    </IconButton>
                    <IconButton sx={{ml:2}} color="primary" aria-label="Video call" component="span">
                        <VideocamOutlinedIcon sx={{color:'primary.red',transition:'all .5s','&:hover':{width:'32px',height:'32px'}}} fontSize='medium' /> 
                    </IconButton>
                    <IconButton sx={{ml:2}} color="primary" aria-label="Send message" component="span">
                        <TextsmsOutlinedIcon sx={{color:'primary.blue',transition:'all .5s','&:hover':{width:'32px',height:'32px'}}} fontSize='medium' /> 
                    </IconButton>
                </Box>
            </Box>
        </Box>
  )
}

export default SecondTopBar