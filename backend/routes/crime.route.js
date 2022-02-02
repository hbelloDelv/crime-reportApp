const express = require('express');
const router = express.Router();
const app = express();
const crimeModel = require('../models/crime.db');
const path = require('path')


 router.post("/crime", async(req, res) => {
  try {
        // let filesArray = [];
        // let photos = req.files['imageFile'][0].filename;
        // console.log(photos)
        // photos.forEach(element =>{
        //     const filephoto = {
        //         filename: element.filename
        //     }
        //     filesArray.push(filephoto)
        // })
      let reportCrime = new crimeModel({
      whatHappen: req.body.whatHappen,
    //   photo: filesArray,
      photo: req.files['imageFile'][0].filename,
      audio: req.files['audioFile'][0].filename,
      video: req.files['videoFile'][0].filename,
      whereHappen: req.body.whereHappen,
      whenHappen: req.body.whenHappen
      });
      const myreport = await reportCrime.save();
      res.status(200).json(myreport)
  } catch (error) {
      res.status(500).json(error);
  }
})

//get a report 
router.get('/:id', async (req, res) =>{
    try {
        const report = await crimeModel.findById(req.params.id)
        res.status(200).json(report)
    } catch (error) {
        res.status(500).json(error)
    }
})

//get all report
router.get('/', async (req, res) =>{
    try {
        const report = await crimeModel.find().sort({_id: -1})
        res.status(200).json(report)
    } catch (error) {
        res.status(500).json(error)
    }
})



//delet report
router.delete('/:id', async (req, res)=>{
        try {

            await crimeModel.findByIdAndDelete(req.params.id);
            res.status(200).json("Report has been deleted")
        } catch (error) {
            res.status(500).json(error)
        }
    
})



// router.delete('/:id', async (req, res)=>{
//     if(req.body.userId === req.params.id){
//         try {
//            await crimeModel.findByIdAndDelete(req.params.id);
//             res.status(200).json("report has been deleted")
//         } catch (error) {
//             res.status(500).json(error)
//         }
    
//     }else{
//         res.status(401).json("You are not permitted to  deleted this report")
//     }
// })



//route for crime repoter
// router.post('/crime', (req, res) =>{
// let reportCrime = new crimeModel({
//     whatHappen: req.body.whatHappen,
//     // photo: req.file.path,
//     // audio: req.file.path,
//     // video: req.file.path,
//     whereHappen: req.body.whereHappen,
//     whenHappen: req.body.whenHappen
// })
// if(req.files['imageFile'][0].filename){
//     let path = ''
//     Array(req.files['imageFile'][0].filename).forEach(function(files, index, arr){
//         path = path + files.path +','
//     })
//     path = path.substring(0, path.lastIndexOf(","))
//     reportCrime.photo = path
//     console.log(path)
// }


// reportCrime.save()
//     .then(response =>{
//         res.json({
//             message: 'report save successfully'
//         })
//     }).catch(error =>{
//         res.json({
//             message: 'An error occured'
//         })
//     })
// })


// router.post('/crime', async(req, res) =>{
//     Promise.all(
//         req.files.map(async (file) =>{
//             const crimeReport = new crimeModel({
//                 photo: req.files['imageFile'][0].filename,
//                 audio: req.files['audioFile'][0].filename,
//                 video: req.files['videoFile'][0].filename,
//                 whereHappen: req.body.whenHappen,
//                 whatHappen: req.body.whatHappen,
//                 whenHappen: req.body.whenHappen,
//             });
//             return await crimeReport.save();
//         })
//     )
//     .then(res.status(201).json("report submitted successfully"))
//     .catch((e) =>{
//         res
//         .status(500).json("something went wrong")
//     })
// })

module.exports = router;