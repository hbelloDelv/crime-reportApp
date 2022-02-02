import React from 'react';
import { Link } from 'react-router-dom'
import './adminheader.css'
import { FaUser, FaBars, FaHome} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

function AdminHeader() {
    return (
        <div className="admin-nav">
            <div className="home-link">
               <Link to="/"><FaHome className="headerIcon" /></Link> 
            </div>
            <div className="alert-section">
                <AiOutlineMail className="headerIcon"/>
            </div>
            <div className="user-logout">
                <FaUser className="headerIcon"/>
            </div>
        </div>
    )
}

export default AdminHeader
