const express = require('express');
const router = express.Router();
const app = express();
const bcrypt = require('bcrypt')
const userModel = require('../models/user.db');
const path = require('path')



//route for registering users
router.post("/register", async(req, res) => {
    try {

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const newRegister = new userModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            forceNumber: req.body.forceNumber,
            phoneNumber: req.body.phoneNumber,
            zoneAddress: req.body.zoneAddress,
            email: req.body.email,
            userName:  req.body.userName,
            password: hashPassword
        });
        const register = await newRegister.save();
        res.status(200).json(register)
    } catch (error) {
        res.status(500).json(error);
    }
})


// route to login
router.post('/login', (req, res) => {
  //email and password
  const userName = req.body.userName
  const password = req.body.password

  //find user exist or not
  userModel.findOne({ userName })
      .then(user => {
          //if user not exist than return status 400
          if (!user) return res.status(400).json({ msg: "User not exist" })

          //if user exist than compare password
          //password comes from the user
          //user.password comes from the database
          bcrypt.compare(password, user.password, (err, data) => {
              //if error than throw error
              if (err) throw err

              //if both match than you can do anything
              if (data) {
                //   const { password, ...others} = data.doc_;
                  return res.status(200).json({msg: "login successfully!"})
              } else {
                  return res.status(401).json({ msg: "Invalid credencial" })
              }

          })

      })

})

//update route
router.put('/:id', async (req, res)=>{
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {

            const updatedUser = await userModel.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            },{new: true})
            res.status(200).json(updatedUser)
        } catch (error) {
            res.status(500).json(error)
        }
    
    }else{
        res.status(401).json("Account has been updated!")
    }
    
})


//delete route
router.delete('/:id', async (req, res)=>{
    if(req.body.userId === req.params.id){
        try {

            await userModel.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted")
        } catch (error) {
            res.status(500).json(error)
        }
    
    }else{
        res.status(401).json("You are not permitted to  deleted this account")
    }
    
})


//get user route
router.get('/:id', async (req, res)=>{
    try {
        const user = await userModel.findById(req.params.id)
        const {password, ...others} = user._doc;
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;