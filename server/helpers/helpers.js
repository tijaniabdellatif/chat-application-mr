const jwt = require('jsonwebtoken');

module.exports.createToken = (secret,expires,state = {id,username,email,image,loggedAt}) => {


      return jwt.sign({

         ...state


      },secret,expires)
    

}