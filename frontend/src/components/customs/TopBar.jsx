
import React from 'react'
import {Box,Typography,Avatar,IconButton,FormControl,InputLabel,MenuItem,Select} from '@mui/material'
import userImage from '../../images/stores/avatar-test.jpg';
import CircleIcon from '@mui/icons-material/Circle';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';

function TopBar() {

        const [status, setStatus] = React.useState('Online')
        const handleChange = (event) => {
          setStatus(event.target.value);
        };
  return (
    
<Box sx={{display:'flex',
        alignItems:'center',
        bgcolor:'#525E75',
        borderRadius:5,
        height:70,
        width:'100%',
        mt:1,
        boxShadow:5
        }} id="myBar">
    <Box sx={{width:'100%',display:'flex',alignItems:'center'}}>
        <Avatar
            alt="user image"
            src={userImage}
            sx={{ width: 56, height: 56 ,m:1 }}
        />
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Typography sx={{fontWeight:500,mr:1,width:'70px'}} variant="h6" fontSize='13px' color='primary.light'>Souak soufyen</Typography>
                    <div>
                        <FormControl sx={{mr:'auto', width: 80 ,color:'red'}}>
                            <InputLabel id="statusSelect">Status</InputLabel>
                            <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={status}
                            onChange={handleChange}
                            autoWidth
                            label="Status"
                            sx={{height:'40px',width:120}}
                            >
                                <Typography sx={{mx:1}} variant="body1" color="primary.main">Select Status</Typography>
                                <MenuItem value={'Online'}>
                                    <CircleIcon fontSize='12px' sx={{color:'primary.green',mr:1}} />
                                     Online
                                </MenuItem>
                                <MenuItem value={'Busy'}>
                                    <CircleIcon fontSize='12px' sx={{color:'primary.yellow',mr:1}} />
                                     Busy
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
            </Box>
    </Box>
    
    <Box sx={{display:'flex',mx:1,bgcolor:'secondary.main',borderRadius:5,boxShadow:3}}>
        <IconButton sx={{bgcolor:'#fff',borderRadius:'50%',mr:1,'&:hover':{bgcolor:'primary.light','&:hover':{bgcolor:'primary.red'}}}} aria-label="List" component="label">
            <AlignHorizontalLeftIcon sx={{ color:"primary.red",'&:hover':{color:'primary.light'}}} fontSize='meduim' />
        </IconButton>
        <IconButton sx={{bgcolor:'#fff',borderRadius:'50%','&:hover':{bgcolor:'primary.red'}}} aria-label="Create" component="label">
            <ModeEditOutlineTwoToneIcon sx={{ color:"primary.red",'&:hover':{color:'primary.light'} }} fontSize='meduim' /> 
        </IconButton>
    </Box>
</Box>
  )
}

export default TopBar