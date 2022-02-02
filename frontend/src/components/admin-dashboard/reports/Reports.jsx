import React, {useState, useEffect} from 'react';
import './reports.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Sidebar from '../sidebar/Sidebar'

const Reports = () => {
    const [reports, setReports] = useState([]);
    const publicFolderImages = 'http://localhost:5000/imageUpload/'
    const publicFolderAudios = 'http://localhost:5000/audioUpload/'
    const publicFolderVideos = 'http://localhost:5000/videoUpload/'

    useEffect(() => {
            const fetchReports = async() =>{
               const res = await axios.get('/create')
               setReports(res.data)
            }
            fetchReports()
    },[])


    const handleDelete =  (id)=>{
        // alert(id)
        axios.delete('/create/' + id)
        .then(res => console.log(res.data));
        setReports(reports.filter(el => el._id !== id))
            
    }

    return (
        <div className="report-container">
            <table>
                <thead>
                <tr>
                    <th>No.</th>
                    <th>What happen</th>
                    <th>Photo</th>
                    <th>Audio</th>
                    <th>Video</th>
                    <th>Where it happen</th>
                    <th>When it happen</th>
                    <th>When reported</th>
                    <th>Delete report</th>
                </tr> 
                </thead >      
                    {reports.map(data =>(
                        <tbody>
                            <tr>
                            <td>{data.id}</td>
                            <td>{data.whatHappen}</td>
                            <td>
                                {data.photo && 
                                (
                                <img src={publicFolderImages + data.photo} 
                                alt="" className="imagedb"/>
                                )}
                                {/* {data.photo} */}
                            </td>
                            <td>
                                {/* {data.audio} */}
                                {data.audio && 
                                    (       
                                        <a href={publicFolderAudios + data.audio} 
                                            target="_blank" rel="noopener noreferrer" 
                                            download>
                                            download audio
                                        </a>
            
                                    )}                            
                            </td>
                            <td>
                                {/* {data.video} */}
                                {data.video && 
                                    (       
                                        <a href={publicFolderVideos + data.video} 
                                            target="_blank" rel="noopener noreferrer" 
                                            download>
                                            download video
                                        </a>
            
                                    )}
                            </td>
                            <td>{data.whereHappen}</td>
                            <td>
                            {/* {data.whenHappen} */}
                            {new Date(data.whenHappen).toLocaleString()}
                            </td>
                            <td>{ new Date(data.createdAt).toLocaleString()}</td>

                            <td><button onClick={() =>handleDelete(data._id)} className="deleteButton">Delete</button></td>
                            </tr>
                        </tbody>
                    ))}   
                
            </table> 
        </div>
    )
}

export default Reports
