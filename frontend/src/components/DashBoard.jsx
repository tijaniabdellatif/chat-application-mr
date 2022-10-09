import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SupervisedUserCircle from '@mui/icons-material/SupervisedUserCircle'
import {Link} from 'react-router-dom'
import ForumIcon from '@mui/icons-material/Forum';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{display:'flex',alignItems:'center'}}>
            <Typography sx={{display:'flex',alignItems:'center'}} variant="h5" color="primary.light">
                <DashboardIcon /> Dashboard
            </Typography>
            <Link 
            style={{
                display:'flex',
                alignItems:'center',
                marginLeft:'20px',
                textDecoration:'none',
                color:'#ffc',
                border:'1px solid #fff',
                padding:'5px',
                borderRadius:'5px',
                border:'1px solid #cecece',
            }} to="/main">
                <ForumIcon/>
                Messenger
            </Link>
          </Box>
          
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary='Dashboard' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    <PersonIcon/>
                </ListItemIcon>
                <ListItemText primary='Users' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* content here */}

        <Typography sx={{ mb: 5 }} variant="h3" color="primary.main">Hi, Welcome back</Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{
                boxShadow:3,
                p:2,borderRadius:3,
                bgcolor:'secondary.main',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column'
                }}>
                <SupervisedUserCircle sx={{fontSize:'5rem',color:'primary.light'}} />
                <Box sx={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                    <Typography variant="h5" color="primary.light" sx={{letterSpacing:2}}>2017</Typography>
                    <Typography variant="h6" color="primary.light">Registerd Users</Typography>
                </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{
                boxShadow:3,
                p:2,borderRadius:3,
                bgcolor:'secondary.main',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column'
                }}>
                <InsertCommentIcon sx={{fontSize:'5rem',color:'primary.light'}} />
                <Box sx={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                    <Typography variant="h5" color="primary.light" sx={{letterSpacing:2}}>2017</Typography>
                    <Typography variant="h6" color="primary.light">Total Messages</Typography>
                </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>

          </Grid>

          <Grid item xs={12} sm={6} md={3}>

          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
