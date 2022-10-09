import tokenDecode from 'jwt-decode';

export const decodedToken = (token) => {

    const tokenDecoded = tokenDecode(token);
    const expireTime = new Date(tokenDecoded.expires * 1000);

    if(new Date() > expireTime){

       return null;
    }

    return tokenDecoded;
}




export const getToken = localStorage.getItem('authToken');