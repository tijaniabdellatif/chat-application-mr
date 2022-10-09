import React from 'react'
import {Button,Avatar,Box,ButtonGroup} from '@mui/material'
import userImage from '../../images/stores/avatar-test.jpg';


function LatestConversations() {


const buttons = [
    
        <Button sx={{bgcolor:'primary.light',display:'flex',justifyContent:'start','&:hover':{bgcolor:'primary.light'}}}>
            <Avatar src={userImage}/>
            <Box sx={{
                color:'primary.main',
                fontSize:'1rem',
                fontWeight:'500',
                letterSpacing:2,ml:1,
                '&:hover':{bgcolor:'primary.light'},
                }}>souak soufyen</Box>
        </Button>,
        <Button sx={{display:'flex',justifyContent:'start','&:hover':{bgcolor:'primary.light'}}}>
        <Avatar src={userImage}/>
        <Box sx={{
            color:'primary.main',
            fontSize:'1rem',
            fontWeight:'500',
            letterSpacing:2,ml:1,
            }}>souak soufyen</Box>
    </Button>,
        <Button sx={{display:'flex',justifyContent:'start','&:hover':{bgcolor:'primary.light'}}}>
        <Avatar src={userImage}/>
        <Box sx={{
            color:'primary.main',
            fontSize:'1rem',
            fontWeight:'500',
            letterSpacing:2,ml:1,
            }}>souak soufyen</Box>
    </Button>,
        <Button sx={{display:'flex',justifyContent:'start','&:hover':{bgcolor:'primary.light'}}}>
        <Avatar src={userImage}/>
        <Box sx={{
            color:'primary.main',
            fontSize:'1rem',
            fontWeight:'500',
            letterSpacing:2,ml:1,
            }}>souak soufyen</Box>
    </Button>,
        <Button sx={{display:'flex',justifyContent:'start','&:hover':{bgcolor:'primary.light'}}}>
        <Avatar src={userImage}/>
        <Box sx={{
            color:'primary.main',
            fontSize:'1rem',
            fontWeight:'500',
            letterSpacing:2,ml:1,
            }}>souak soufyen</Box>
    </Button>,
        <Button sx={{display:'flex',justifyContent:'start','&:hover':{bgcolor:'primary.light'}}}>
        <Avatar src={userImage}/>
        <Box sx={{
            color:'primary.main',
            fontSize:'1rem',
            fontWeight:'500',
            letterSpacing:2,ml:1,
            }}>souak soufyen</Box>
    </Button>,
    <Button sx={{display:'flex',justifyContent:'start','&:hover':{bgcolor:'primary.light'}}}>
    <Avatar src={userImage}/>
    <Box sx={{
        color:'primary.main',
        fontSize:'1rem',
        fontWeight:'500',
        letterSpacing:2,ml:1,
        }}>souak soufyen</Box>
    </Button>,
    <Button sx={{display:'flex',justifyContent:'start','&:hover':{bgcolor:'primary.light'}}}>
    <Avatar src={userImage}/>
    <Box sx={{
        color:'primary.main',
        fontSize:'1rem',
        fontWeight:'500',
        letterSpacing:2,ml:1,
        }}>souak soufyen</Box>
    </Button>,
    <Button sx={{display:'flex',justifyContent:'start','&:hover':{bgcolor:'primary.light'}}}>
    <Avatar src={userImage}/>
    <Box sx={{
        color:'primary.main',
        fontSize:'1rem',
        fontWeight:'500',
        letterSpacing:2,ml:1,
        }}>souak soufyen</Box>
    </Button>,
    <Button sx={{display:'flex',justifyContent:'start','&:hover':{bgcolor:'primary.light'}}}>
    <Avatar src={userImage}/>
    <Box sx={{
        color:'primary.main',
        fontSize:'1rem',
        fontWeight:'500',
        letterSpacing:2,ml:1,
        }}>souak soufyen</Box>
    </Button>,
    <Button sx={{display:'flex',justifyContent:'start','&:hover':{bgcolor:'primary.light'}}}>
    <Avatar src={userImage}/>
    <Box sx={{
        color:'primary.main',
        fontSize:'1rem',
        fontWeight:'500',
        letterSpacing:2,ml:1,
        }}>souak soufyen</Box>
    </Button>,
    <Button sx={{display:'flex',justifyContent:'start','&:hover':{bgcolor:'primary.light'}}}>
    <Avatar src={userImage}/>
    <Box sx={{
        color:'primary.main',
        fontSize:'1rem',
        fontWeight:'500',
        letterSpacing:2,ml:1,
        }}>souak soufyen</Box>
    </Button>,
    <Button sx={{display:'flex',justifyContent:'start','&:hover':{bgcolor:'primary.light'}}}>
    <Avatar src={userImage}/>
    <Box sx={{
        color:'primary.main',
        fontSize:'1rem',
        fontWeight:'500',
        letterSpacing:2,ml:1,
        }}>souak soufyen</Box>
    </Button>,
    <Button sx={{display:'flex',justifyContent:'start','&:hover':{bgcolor:'primary.light'}}}>
    <Avatar src={userImage}/>
    <Box sx={{
        color:'primary.main',
        fontSize:'1rem',
        fontWeight:'500',
        letterSpacing:2,ml:1,
        }}>souak soufyen</Box>
    </Button>,
    <Button sx={{display:'flex',justifyContent:'start','&:hover':{bgcolor:'primary.light'}}}>
    <Avatar src={userImage}/>
    <Box sx={{
        color:'primary.main',
        fontSize:'1rem',
        fontWeight:'500',
        letterSpacing:2,ml:1,
        }}>souak soufyen</Box>
    </Button>,
    <Button sx={{display:'flex',justifyContent:'start','&:hover':{bgcolor:'primary.light'}}}>
    <Avatar src={userImage}/>
    <Box sx={{
        color:'primary.main',
        fontSize:'1rem',
        fontWeight:'500',
        letterSpacing:2,ml:1,
        }}>souak soufyen</Box>
    </Button>,
    
    ];
    
    
  return (
    <>   
    <Box sx={{
        display: 'flex',overflowY:'scroll',height:'100vh',
        '& > *': {m: 1}, }}>
        <ButtonGroup
            fullWidth
            orientation="vertical"
            aria-label="vertical outlined button group"
        >
            {buttons}
        </ButtonGroup>
    </Box>
    </>
  )
}

export default LatestConversations