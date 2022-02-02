const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
const path = require('path');
const userRouter =  require('./routes/user.route')
const reportCrimeRouter =  require('./routes/crime.route')
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());


const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    if(file.fieldname === 'imageFile'){
      cb(null, 'imageUpload')
    }else if(file.fieldname === 'audioFile'){
      cb(null, 'audioUpload')
    }
    else if(file.fieldname === 'videoFile'){
      cb(null, 'videoUpload')
    }
  },
  filename: (req, file, cb) =>{
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
  }
})

const upload = multer({
  storage: storage
})

const report = upload.fields([
  {name: 'whatHappen'},
  {name: "imageFile", maxCount: 2},
  {name: 'audioFile', maxCount: 2},
  {name: 'videoFile', maxCount: 2},
  {name: 'whereHappen'},
  {name: 'whenHappen',},
])


app.use('/create', report, reportCrimeRouter);
app.use('/user',  userRouter);

app.use('/imageUpload', express.static(path.join(__dirname, '/imageUpload')));
app.use('/audioUpload', express.static(path.join(__dirname, '/audioUpload')));
app.use('/videoUpload', express.static(path.join(__dirname, '/videoUpload')));




// CONNECTION TO DB

mongoose.connect('mongodb://localhost/crime_report_DB', 
{ useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
  // useNewUrlParser: true
  useFindAndModify: false,
}, (error)=>{
    if(!error){
        console.log("Database connected succussfully!")
    }else{
        console.log("Error connecting to mongodb")
    }
})





app.listen(5000, ()=>{console.log("Server stated on port 5000")});