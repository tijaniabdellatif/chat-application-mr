const {model,Schema} = require('mongoose');

const userSchema = new Schema({

     username:{

        type:String,
        required:true
     },

     password:{

        type:String,
        required:true,
        select:false
     },

     email:{

          type:String,
          required:true
     },

     image:{

          type:String,
          required:true
     }



},{timestamps:true});

module.exports = model('user',userSchema);