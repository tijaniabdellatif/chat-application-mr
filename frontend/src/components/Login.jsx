import React,{useState,useEffect}from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import classes from './custom.module.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import loginImage from '../images/stores/login.webp';
import {userLogin} from '../store/actions/authActions';
import {useDispatch,useSelector} from 'react-redux';
import toast from 'react-hot-toast';
import { ERROR_CLEAR, SUCCESS_MESSAGE_CLEAR } from '../store/types/types';
import  {Link, useNavigate} from 'react-router-dom';

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    error,
    successMessage,
    authenticated,
  } = useSelector(state => state.auth);

  const [inputError,setInputError] = useState(false);

  const [state,setState] = useState({

    
    email:'',
    password:'',

    
});

 
  
 const inputHandler = (e) => {

    setState((prev) => ({...prev,[e.target.name]:e.target.value}));
  

}

const userLogged = (e) => {

   e.preventDefault();

    dispatch(userLogin(state)); 
   
}
useEffect(() => {

    
  if(authenticated){
      navigate('/chat/messenger');
      
      }

    
       if(successMessage){

      
        toast.success(successMessage, {
          icon: '👏',
        });

        dispatch({
           type:SUCCESS_MESSAGE_CLEAR })
       }

       if(error){
        
          error.map(err => {

             toast.error(err, {
              icon: '⚠️',
            });
          })

          dispatch({type:ERROR_CLEAR })
       }
},[successMessage,error,authenticated,dispatch,navigate])
  return (
    <>
    <Box sx={{width:'70%',m:'auto'}}>
        <Box sx={{display:'flex',justifyContent:'center',m:3}}>
            <ForumRoundedIcon sx={{fontSize:'3rem',color:'secondary.main'}} />
            <Typography variant="h3" color="secondary.main">Chat</Typography>
        </Box>
            <Typography sx={{textAlign:'center',mt:'-33px'}} variant="body1" color="secondary.main">By Mulitlist</Typography>
        <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid item sx={{display:{xs:'none',md:'block'}}}>
            <img src={loginImage} className={classes.imgSize}  />
          </Grid>
        <Grid item xs={12}  md={12} lg={6} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={userLogged} noValidate sx={{ mt: 1 }}>
                <Box sx={{display:'flex',width:'100%',mb:2}}>
                    <Box bgcolor="#F64D4B" height="5px" width="100%"></Box>
                    <Box bgcolor="#B52483" height="5px" width="100%"></Box>
                    <Box bgcolor="#F3BE2E" height="5px" width="100%"></Box>
                    <Box bgcolor="#54C21B" height="5px" width="100%"></Box>
                    <Box bgcolor="#00537D" height="5px" width="100%"></Box>
                </Box>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                helperText="your provided email"
                autoComplete="email"
                autoFocus
                onChange={inputHandler}
                value={state.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText="your provided email"
                onChange={inputHandler}
                value={state.password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,bgcolor:"#28DEC0" }}
              >
                Sign In
                  </Button>
                <Grid container>

                  <Grid item xs={12} md={6}>
                    <Link to="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Link to="/chat/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>

                </Grid>
              </Box>
              </Box>
            </Grid>
          </Grid>
    </Box>
    
    </>
  )
}

export default Login