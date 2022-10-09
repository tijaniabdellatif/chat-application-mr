import React,{useState,useEffect} from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import  {Link, useNavigate} from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import classes from './custom.module.css';
import {useDispatch,useSelector} from 'react-redux';
import { userRegister } from '../store/actions/authActions';
import toast from 'react-hot-toast';
import { ERROR_CLEAR, SUCCESS_MESSAGE_CLEAR } from '../store/types/types';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import registerImage from '../images/stores/register.webp';
import IconButton from '@mui/material/IconButton';


function Signup() {

    // const handleSubmit = (e)=>{
    //   !uname ? setUnameErr(true) : setUnameErr(false)
    //   !email ? setEmailErr(true) : setEmailErr(false)
    //   !pwd ? setPwdErr(true) : setPwdErr(false)
    //   !pwdConfirm ? setPwdConfirmErr(true) : setPwdConfirmErr(false)
    //   if(!unameErr && !emailErr && !pwdErr && !pwdConfirmErr){
    //     register(e)
    //   }
    // }



    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {error,successMessage,authenticated} = useSelector(state => state.auth);
    const [state,setState] = useState({

        username:'',
        email:'',
        password:'',
        confirm:'',
        image:'',
        
    });

    const [loadImage,setLoadImage] = useState('');
    const [errno,setErrno] = useState(false);

  


    /**
     * handling state inputs
     * @param {Event} event
     */
    const InputHandler = (e) => {

  
      setState((prev) => ({...prev,[e.target.name]:e.target.value}));

     
      
  
    }
    /**
     * handling file reading 
     * @param {Event} event 
     */
    const fileHandler = (e) => {

      if(e.target.files.length !== 0){

        setState((prev) => ({...prev,[e.target.name]:e.target.files[0]}));
           
            const reader = new FileReader();

            reader.onload = () => {

              setLoadImage(reader.result);
            }

            reader.readAsDataURL(e.target.files[0]);
      }
}


     /**
      * Register Function 
      * @param {Event} e 
      */
    const register = (e) => {
      e.preventDefault();

       const {username,email,password,confirm,image}=state;
       const data = new FormData();
       data.append('username',username);
       data.append('email',email);
       data.append('password',password);
       data.append('confirm',confirm);
       data.append('image', image);
       dispatch(userRegister(data));
       

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
                  icon: '🚩',
                }); 

                setErrno(true);
               
              });

              


                

              dispatch({type:ERROR_CLEAR })
            

           }

           else {
            setErrno(false);

           }

           return () => {

             setErrno(false);
           }

         

           
    },[successMessage,error,authenticated,dispatch,navigate,errno])
   
   
      return (
        <>
        <Box sx={{width:'80%',m:'auto',mt:5}}>
            <Box sx={{display:'flex',justifyContent:'center',m:3}}>
            <ForumRoundedIcon sx={{fontSize:'3rem',color:'secondary.main'}} />
            <Typography variant="h3" color="secondary.main">Chat</Typography>
            </Box>
            <Typography sx={{textAlign:'center',mt:'-33px'}} variant="body1" color="secondary.main">By Mulitlist</Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  
                    <Grid lg={6} xs={12} sx={{ display:{xs:'none',md:"block"} }}>
                    <img src={registerImage} className={classes.imgSize}  />
                    </Grid>
                    <Grid md={6} xs={12}>
  
           <Container component="main" maxWidth="xs">
           
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" color="primary.main">
                Sign up
              </Typography>
              <Box component="form"  noValidate onSubmit={register}  sx={{ mt: 3 }}>
              <Box sx={{display:'flex',width:'100%',mb:2}}>
                      <Box bgcolor="#F64D4B" height="5px" width="100%"></Box>
                      <Box bgcolor="#B52483" height="5px" width="100%"></Box>
                      <Box bgcolor="#F3BE2E" height="5px" width="100%"></Box>
                      <Box bgcolor="#54C21B" height="5px" width="100%"></Box>
                      <Box bgcolor="#00537D" height="5px" width="100%"></Box>
                  </Box>
  
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
  
                    <TextField
                     
                    
                      onChange={InputHandler}
                      autoComplete="given-name"
                      name="username"
                      required
                      fullWidth
                      id="username"
                      label="username"
                      autoFocus
                      type="text"
                      helperText="give username"
                      value={state.username}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                       onChange={InputHandler}
                      required
                      fullWidth
                      id="email"
                      type="email"
                      label="email"
                      helperText="example@foo.com"
                      name="email"
                      autoComplete="email"
                      value={state.email}
                    />
                  </Grid>
                
                  <Grid item xs={12}>
                    <TextField
                     onChange={InputHandler}
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      value={state.password}
                      autoComplete="accept characters and numbers"
                      helperText="the password should contain 6 character and max"
                    />
                  </Grid>
  
                  <Grid item xs={12}>
                    <TextField
                    onChange={InputHandler}
                      required
                      fullWidth
                      name="confirm"
                      label="confirm"
                      type="password"
                      id="confirm"
                      value={state.confirm}
                      autoComplete="must be the same password"
                    />
                  </Grid>
  
                  <Grid item xs={12}>
                  <Box sx={{display:'flex',justifyContent:'center',alignContent:'center'}}>
                    <Box sx={{overflow:'hidden',border:1,width:'175px',height:'75px',ml:1,mt:1,borderRadius:2}}>
                     
                     {loadImage &&   <Avatar
                        variant="square"
                        sx={{width:'100%',height:'100%'}}
                        src={loadImage}
                        >
                      </Avatar>}
                     
                    </Box>
                    <IconButton sx={{borderRadius:3,mx:2}} color="primary" aria-label="upload picture" component="label" >
                          <input hidden  type="file" name="image"  id="image" onChange={fileHandler}  />
                          <Box sx={{display:'flex',flexDirection:'column'}}>
                              <Typography sx={{textAlign:'left',fontSize:'16px'}} variant="body1" color="initial">Select profile image</Typography>
                              <Typography sx={{textAlign:'left',fontSize:'13px'}} variant="body1" color="gray">Recommanded formats: jpeg/png</Typography>
                          </Box>
                      </IconButton>
                  </Box>
                  
                </Grid>
  
                
            </Grid>
  
  
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to='/chat/login' variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
  
                    </Grid>
                    
                </Grid>
        </Box>
        </>
      )
      
  
  
  }

  export default Signup;