import React, {useState} from 'react';
import './report.css'
import { FaImage, FaAudible, FaVideo } from 'react-icons/fa';
import axios from 'axios';

 

const Report = () => {
    const [report, setReport] = useState({
        whatHappen: '',
        whereHappen: '',
        whenHappen: ''
    })

    const [image, setImage] = useState(null)
    const [audio, setAudio] = useState(null)
    const [video, setVideo] = useState(null)

    const handleChange = (e) =>{
        const {name, value } = e.target;
        setReport(prevInput =>{
            return {
                ...prevInput,
                [name]: value
            }
        })
        
    }

    const ImagePreviews = () =>{
        if(image){
            return(<div>Image selected</div>)
        }
    }

    const AudioPreviews = () =>{
         if(audio){
            return(<div>Audio selected</div>)
        }
    }
    const VideoPreviews = () =>{
         if(video){
            return(<div>Video selected</div>)
        }
    }


    const handleSubmit = async (e) =>{
        e.preventDefault()

        const formData = new FormData();
        formData.append('whatHappen', report.whatHappen);

        for (let i = 0 ; i < image.length ; i++) {
            formData.append("imageFile", image[i]);
        }

        formData.append('audio', audio);
        for(let i = 0; i < audio.length; i++){
            formData.append('audioFile', audio[i]);
        }

        formData.append('video', video);
        for(let i = 0; i < video.length; i++){
            formData.append('videoFile', video[i]);
        }

        formData.append('whereHappen', report.whereHappen);
        formData.append('whenHappen', report.whenHappen);

        try {
           await axios.post('http://localhost:5000/create/crime', formData, {
               headers: {
                   'Content-Type': 'multipart/form-data'
               }
           })
            
        } catch (error) {
            console.log({message: error})
        }

        // for(var pair of formData.entries(1)){
        //     console.log(pair[0] + '-' + pair[1])
        // }

        
        
        setReport({
            whatHappen: '',
            whereHappen: '',
            whenHappen: '',
            image: '',
            audio: '',
            video: ''
        })
    }
    return (
        <div className="report">
        <form className="form-containerForReport"  onSubmit={handleSubmit}>
        <h4>Tell us what happen</h4>
            <textarea className="textArea" 
                        autoFocus={true}
                        name="whatHappen"
                        autoComplete="off" 
                        value={report.whatHappen}
                        onChange={handleChange}>
                        </textarea>
            <h4>Send us an image, audio, or video recording about what happen</h4>
                <div className="media-container">
                    <div className="media-item">
                        <div className="media-wrapper">
                            <label htmlFor="inputImage">
                                <FaImage  className="media-itemIcons"/>
                            </label>
                            <input type="file" 
                                    id="inputImage"  
                                    accept="image/*"  
                                    style={{display: "none"}} 
                                    multiple
                                    name="imageFile"
                                    onChange={(e) =>setImage(e.target.files)}
                                    // onChange={handlePreview}
                                    />
                        </div>
                        <span className="media-title">Upload images</span>
                    </div>

                    <div className="media-item">
                        <div className="media-wrapper">
                            <label htmlFor="inputAudio">
                            <FaAudible  className="media-itemIcons" />
                            </label>
                            <input type="file" 
                                        id="inputAudio" 
                                        accept="audio/*"  
                                        style={{display: "none"}} 
                                        multiple
                                        name="audioFile"
                                        onChange={(e) =>setAudio(e.target.files)}
                                        />
                        </div>
                        <span className="media-title">Upload audio</span>
                    </div>

                    <div className="media-item">
                        <div className="media-wrapper">
                            <label htmlFor="inputVideo">
                                <FaVideo  className="media-itemIcons"/>
                            </label>
                            <input type="file" 
                                    id="inputVideo"  
                                    accept="video/*"  
                                    style={{display: "none"}} 
                                    multiple
                                    name="videoFile"
                                    onChange={(e) =>setVideo(e.target.files)}
                                    />
                        </div>
                        <span className="media-title">Upload video</span>
                    </div>
                </div>

                <div className="previewBox">
                    <div className="preview-items">
                        {ImagePreviews()}
                    </div>
                    <div className="preview-items">
                        {AudioPreviews()}
                    </div>
                    <div className="preview-items">
                        {VideoPreviews()}
                    </div>
                </div>
                    
                    {/* //Condition rendering of files selected*/}
               
                   
                   
                   
                    

                <div className="last-two-inputs">
                <label className="last-two-inputsLabels">Where this happen?</label>
                <input type="text" 
                        className="textInput"
                        autoComplete="off" 
                        placeholder="Where this happen..."
                        name="whereHappen"
                        value={report.whereHappen}
                        onChange={handleChange}/>
            
            
                <label className="last-two-inputsLabels">When this happen?</label>
                <input type="date" 
                            className="textInput" 
                            name="whenHappen"
                            value={report.whenHappen}
                            onChange={handleChange}/>
                </div>
                
                <button className="submitReportBtn">Send</button>
                 
        </form>
        </div>
    )
}

export default Report
