const mongoose = require('mongoose');

// const userSchema = mongoose.Schema({
    
//         whatHappen: {type: String},
//         photo: {type: String },
//         audio: {type: String },
//         video: {type: String },
//         whenHappen: {type: String},
//         whereHappen: {type: String},   
// },{timestamps: true})


const userSchema = mongoose.Schema({
    
        whatHappen: {type: String},
        photo: {type: String },
        audio: {type: String },
        video: {type: String },
        whereHappen: {type: String},
        whenHappen:{
                type: Date,
         } ,  
        createdAt: {
                type: Date,
                default: Date.now()
         }         
})





let crimeData = mongoose.model('Report', userSchema);

module.exports = crimeData;