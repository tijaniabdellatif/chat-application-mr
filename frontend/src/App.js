import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Signup from './components/Signup';
import Chat from './components/Chat';
import {Toaster} from 'react-hot-toast';
import Icons from './components/customs/Example';
import Main from './components/Main';
import CssBaseline from '@mui/material/CssBaseline';
import InboxMessages from './components/customs/InboxMessages';
import Dashboard from './components/DashBoard';
import Error from './components/customs/Error';


function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main:'#2C3639',
        light:'#ffe',
        red: '#F64D4B',
        violet: '#B52483',
        yellow: '#F3BE2E',
        green: '#54C21B',
        blue: '#00537D',
      },
      secondary:{
        main:'#3A464F'
      }
    },
  });

  return (

    <div className="App">
      <CssBaseline />
    <ThemeProvider theme={theme}>

      <Toaster 
      position='top-right'
      toastOptions={{ 

           duration:6000,
            
       }}
      />
      <BrowserRouter>
        <Routes>

        <Route path="/chat/login" element={<Login />} />
        <Route path="/chat/signup" element={<Signup />} />
        <Route path="/chat/dashboard" element={<Dashboard />} />
        <Route path='/example' element={<Icons />}></Route>
        <Route path='/chat/messenger' element={<Chat />}></Route>
        <Route path='/test' element={<InboxMessages />}></Route>
        <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>

    </ThemeProvider>
    </div>

  );
}

export default App;
