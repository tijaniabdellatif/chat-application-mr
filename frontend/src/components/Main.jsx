import OnlineContacts from './customs/OnlineContacts';
import TopAppBar from './customs/TopAppBar';
import SecondAppBar from './customs/SecondAppBar';
import InboxMessages from './customs/InboxMessages';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import ChatScreen from './customs/ChatScreen';
import SecondTopBar from './customs/SecondTopBar';


const drawerWidth = 400;

function Main(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{boxShadow:0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar 
        sx={{backgroundColor:'rgba(255, 255, 255, 0.9)',
        borderBottom:'1px solid',
        borderBottomColor:'secondary.main',boxShadow:5}}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' },color:'primary.main' }}
            
          >
            <MenuIcon />
          </IconButton>
          
          <Box>
            <Box sx={{display:'flex',justifyContent:'center',m:1}}>
                <ForumRoundedIcon sx={{fontSize:'2.5rem',color:'secondary.main'}} />
                <Typography variant="h4" color="secondary.main">Chat</Typography>
            </Box>
            <Typography sx={{textAlign:'center',mt:'-17px'}} variant="body1" color="secondary.main">By Mulitlist</Typography>
          </Box>
          <Box sx={{display:'flex',alignItems:'center',ml:5,mt:1}}>
            <Button variant="outlined" startIcon={<DashboardIcon />}>
                <Link style={{textDecoration:'none',color:'#3A464F',width:'100%'}} to="/dashboard">
                  Dashboard
                </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
                <TopAppBar />
                <OnlineContacts />
                <InboxMessages />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <TopAppBar/>
          <OnlineContacts/>
          <InboxMessages/>
        </Drawer>
      </Box>
      <Box>
        <Toolbar />
        <SecondTopBar/>
        <ChatScreen />
      </Box>
    </Box>
  );
}


export default Main;
