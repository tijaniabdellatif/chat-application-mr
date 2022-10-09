import React from 'react';
import Box from '@mui/material/Box';

import './css/rightside.css';
import userImage from '../../images/stores/avatar-test.jpg';
import  Avatar  from '@mui/material/Avatar';
import  Typography from '@mui/material/Typography';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import Conversation from './Conversation';
import CircleIcon from '@mui/icons-material/Circle';


const RightSide = () => {
  return (

<Box sx={{ height:'100%' }}>

<Box className="row">

<Box className='col-8'>
  <Box sx={{ 

          height: '100vh',
          borderRight: '1px solid black',
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'space-between',
   }}>

    <Box sx={{ 
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       padding: '12px 10px',
       borderBottom: '1px solid rgba(0,0,0,0.1)',
       boxShadow: '2px 14px 9px -18px #111',
       width:'90%',
       mx:'auto'
     }}>
    <Box sx={{ width:"20%",display:'flex', flexDirection:'row',justifyContent:'space-around',alignItems:'center',alignContent:'center'}}>

    <Box sx={{ml:2}}>
      <Avatar src={userImage} sx={{ height:'60px',width:"60px",ml:2 }} />
    </Box>

    <Box sx={{ml:2}}>
    <Typography sx={{width:'150px'}} variant="h6" fontSize='1rem' color='primary.main'>Tijani abdelatif</Typography>
    <Typography
    sx={{fontSize:'18px',color:'primary.main',display:'flex',alignItems:'center'}}
    variant="h6">Status 
    <CircleIcon fontSize='13px' sx={{color:'primary.green',mx:1}} />
    </Typography>
    </Box>
</Box>

<Box className='icons'>
              <Box className='icon' sx={{ml:2,'&:hover':{color:"secondary.main"} }}>
                  <LocalPhoneOutlinedIcon sx={{ color:"primary.red"}} fontSize='medium' />
                 </Box>
           <Box className='icon' sx={{ml:2,'&:hover':{color:"secondary.main"} }}>
                 <VideocamOutlinedIcon sx={{ color:"primary.blue" }} fontSize='medium' /> 
            </Box>
            <Box className='icon' sx={{ml:2,'&:hover':{color:"secondary.main"} }}>
                 <TextsmsOutlinedIcon sx={{ color:"primary.green" }} fontSize='medium' /> 
            </Box>
        </Box>

    </Box>

    <Conversation />
    
    
   


  </Box>


  
 

</Box>

<Box className='col-4'>
  
   

</Box>

</Box>





</Box>
       
     


      
  )
}

export default RightSide;
