import { 
        ERROR_CLEAR, 
        LOGIN_FAIL, 
        REGISTER_FAIL,
        REGISTER_SUCCESS, 
        SUCCESS_MESSAGE_CLEAR,
        LOGIN_SUCCESS
} from "../types/types";

import {decodedToken,getToken} from '../../helpers/functions';

const initialState = {

        loading:true,
        authenticated:false,
        error:'',
        successMessage:'',
        infos:''
}


if(getToken){

         const getInfos = decodedToken(getToken);

         if(getInfos){

                initialState.infos = getInfos;
                initialState.authenticated = true;
                initialState.loading = false;
         }
}




export const authReducer = (state = initialState,action) => {

      const {payload,type} = action;
      if(type === REGISTER_FAIL || type === LOGIN_FAIL){

           return {

                ...state,
                loading:true,
                error:payload.error,
                authenticated:false,
                infos:''

                
           }

      }

      

      if(type===REGISTER_SUCCESS || type===LOGIN_SUCCESS){
        
        return {

                ...state,
                loading:false,
                error:'',
                authenticated:true,
                infos:decodedToken(payload.token),
                successMessage:payload.successMessage
        }

       
      }


      if(type === SUCCESS_MESSAGE_CLEAR){

            return {

                ...state,
                successMessage:''
            }
      }

      if(type === ERROR_CLEAR){

        return {

            ...state,
            error:''
        }
  }

    return state;
}