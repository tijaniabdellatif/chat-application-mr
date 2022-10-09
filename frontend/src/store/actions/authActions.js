import axios from 'axios';
import { REGISTER_FAIL,REGISTER_SUCCESS,LOGIN_FAIL,LOGIN_SUCCESS } from '../types/types';

/**
 * Handle register action / pass data to the backend
 * Handling the request Post to the backend
 * @param {Object} data 
 * @return function
 */
export const userRegister = (data) => {


        return async (dispatch) => {

                const config = {

                      headers:{

                        'Content-Type':'application/json'
                      }
                }

                try{

                    const response = await axios.post('/api/chat/signup',data,config);
                    localStorage.setItem('authToken',response.data.token);
                
                    dispatch({

                        type:REGISTER_SUCCESS,
                        payload:{

                                successMessage : response.data.successMessage,
                                token:response.data.token
                        }
                    })



                }
                catch(error){

                      
                        dispatch({

                              type:REGISTER_FAIL,
                              payload:{

                                  error:error.response.data.error.errorMessage
                              }  
                        })
                      
                }


        }

}

export const userLogin = (data) => {
        return async (dispatch) => {
                const config = {
                      headers:{
                        'Content-Type':'application/json'
                      }
                }

                try{

                    const response = await axios.post('/api/chat/login',data,config);
                    localStorage.setItem('authToken',response.data.token);
        
                    dispatch({

                        type:LOGIN_SUCCESS,
                        payload:{

                                successMessage : response.data.successMessage,
                                token:response.data.token
                        }
                    })

                }
                catch(error){
                        dispatch({

                              type:LOGIN_FAIL,
                              payload:{

                                  error:error.response.data.error.errorMessage
                              }  
                        })
                      
                }


        }

}