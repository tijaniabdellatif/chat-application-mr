import React from 'react'
import { makeStyles,styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import {Box,Avatar} from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";
import userImage from '../../images/stores/avatar-test.jpg'
 
function OnlineContacts() {

  const contacts =[
    {image:userImage,status:'online'},
    {image:userImage,status:'online'},
    {image:userImage,status:'offline'},
    {image:userImage,status:'online'},
    {image:userImage,status:'online'},
    {image:userImage,status:'offline'},
    {image:userImage,status:'offline'},
    {image:userImage,status:'online'},
    {image:userImage,status:'online'},
  ]

    const ConnectedBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));
      
      const OfflineBadge = styled(Badge)(({ theme }) => ({
          '& .MuiBadge-badge': {
              backgroundColor: 'grey',
              color: '#44b700',
              boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            },
      }));

  return (
    <>
        <Box sx={{my:1,mt:'4rem',
        width:'400px',
        boxShadow:'0px 7px 5px -7px #00000078',
        overflow:'hidden',height:'200px'}}>
            <Swiper
                navigation= {true}
                slidesPerView={5}
                spaceBetween={30}
                modules={[Navigation]}
                className="mySwiper"
            >
                
                  {contacts.map((el)=>
                  <SwiperSlide>
                    {el.status == 'online' ? <OfflineBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                        <Avatar
                        alt="user image"
                        src={userImage}
                        sx={{ width: 56, height: 56 ,m:1 }}
                        />
                    </OfflineBadge> :
                    <ConnectedBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                        <Avatar
                        alt="user image"
                        src={el.image}
                        sx={{ width: 56, height: 56 ,m:1 }}
                        />
                    </ConnectedBadge>}
                  </SwiperSlide>
                  )}

            </Swiper>
        </Box>
    </>
  )
}


export default OnlineContacts
