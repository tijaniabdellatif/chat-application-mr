import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Typography,Box} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import SecondTopBar from './SecondTopBar';
import ChatScreen from './ChatScreen';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function SecondAppBar(props) {
  return (
    <>
      {/* <HideOnScroll {...props}> */}
        {/* <AppBar position="sticky" sx={{bgcolor:'transparent',boxShadow:0}}> */}
            <SecondTopBar/>
        {/* </AppBar> */}
      {/* </HideOnScroll> */}
      {/* <Toolbar /> */}
        <ChatScreen/>
    </>
  )
}
