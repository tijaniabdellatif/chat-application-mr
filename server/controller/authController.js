const formidable = require('formidable');
const validator = require('validator');
const fs = require('fs');
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


require('dotenv').config({

     path: '../config/config.env'
})

module.exports.userRegister = (req, res) => {


     const form = formidable();
     form.parse(req, async (err, fields, files) => {


          const {
               username,
               email,
               password,
               confirm
          } = fields;
          const {
               image
          } = files;
          const errors = [];



          if (!username && validator.isEmpty(username)) {

               errors.push('please provide your username');
          }


          if (!email) {

               errors.push('Please provide your email');
          }

          if (email && !validator.isEmail(email)) {

               errors.push('Please provide a valid email');
          }

          if (!password) {

               errors.push('Please provide a password');
          }
          if (!confirm) {

               errors.push('Please provide a password confirmation');
          }

          if (password && confirm && confirm !== password) {

               errors.push('password and confirm must be the same');
          }

          if (password && password.length < 8) {

               errors.push('password must be at least 8 character', )


          }

          if (Object.keys(files).length === 0) {

               errors.push('please provide an image');
          }

          if (errors.length > 0) {

               res.status(400).json({

                    error: {

                         errorMessage: errors
                    }
               });
          } else {

               const originalImageName = files.image.originalFilename;
               const randHash = Math.floor(Math.random() * 99999);
               const newImageName = randHash + originalImageName;
               files.image.originalFilename = newImageName;
               const newPath = __dirname + `../../../frontend/src/images/${image.originalFilename}`;

               console.log(newPath);
               /**
                * Insert data into database
                */

               try {

                    const checkUser = await userModel.findOne({

                         email: email
                    });


                    if (checkUser) {
                         res.status(409).json({

                              error: {

                                   errorMessage: ['email Already exists']
                              }
                         });
                    } else {


                         fs.copyFile(image.filepath, newPath, async (error) => {

                              if (!error) {

                                   const userCreate = await userModel.create({

                                        username,
                                        email,
                                        password: await bcrypt.hash(password, 10),
                                        image: image.originalFilename
                                   })


                                   const token = jwt.sign({

                                        id: userCreate._id,
                                        username: userCreate.username,
                                        email: userCreate.email,
                                        image: userCreate.image,
                                        registredAt: userCreate.createdAt

                                   }, process.env.SECRET, {

                                        expiresIn: process.env.TOKEN_EXPIRE
                                   });

                                   const options = {
                                        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000)
                                   }
                                   res.status(201).cookie('authToken', token, options).json({

                                        successMessage: 'Successfully registred',
                                        token: token
                                   });

                              } else {

                                   res.status(434).json({

                                        error: {

                                             errorMessage: ['Registration failed']
                                        }
                                   })
                              }
                         })
                    }




               } catch (error) {
                    console.log('error',error);
                    res.status(500).json({

                         error: {

                              errorMessage: ['Internal Server Error']
                         }
                    })
               }


          }



     })
}


module.exports.userLogin = async (req, res) => {

     const errors = [];
     const {
          email,
          password
     } = req.body;

     if (!email) {

          errors.push('please provide your email');
     }

     if (!password) {
          errors.push('please provide your password');
     }

     if (email && !validator.isEmail(email)) {

          errors.push('please provide a valid email');
     }

     if (errors.length > 0) {

          res.status(400).json({
               error: {

                    errorMessage: errors
               }
          });
     } else {

          try {
               const checkUser = await userModel.findOne({
                    email: email
               }).select('+password');


               if (checkUser) {

                    const matchPassword = await bcrypt.compare(password, checkUser.password)

                    if (matchPassword) {

                         const token = jwt.sign({

                              id: checkUser._id,
                              username: checkUser.username,
                              email: checkUser.email,
                              image: checkUser.image,
                              registredAt: checkUser.createdAt

                         }, process.env.SECRET, {

                              expiresIn: process.env.TOKEN_EXPIRE
                         });

                         const options = {
                              expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000)
                         }
                         res.status(201).cookie('authToken', token, options).json({

                              successMessage: 'Successfully logged in',
                              token: token
                         });
                    } else {

                         res.status(400).json({


                              error: {

                                   errorMessage: ['Your password is not valid']
                              }
                         });
                    }

               } else {

                    res.status(400).json({


                         error: {

                              errorMessage: ['Your email not found']
                         }

                    });
               }

          } catch (error) {

               res.status(500).json({
                    error: {

                         errorMessage: ['Internal Server Error']
                    }

               });
          }


     }

}