import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import './topnavbar.css'

export default function TopNavbar() {
    const [toggleUserBar, settoggleUserBar] = useState(false)

    return (
        <div className="header">
            <div className="brand-logo">
                <h3>CReport</h3>
            </div>
            <div className="mainNav" style={{transform: toggleUserBar? "translateX(0px)" : ""}}>
                <ul>
                    <li> <Link to="/" className="link">Home</Link></li>
                    <li>FAQs</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li className="LoginLink"><Link to="./login" className="link">Login</Link></li>
                </ul>
            </div>
            <i onClick={() => settoggleUserBar(!toggleUserBar)}className="burgar"><FaBars /></i>
        </div>
    )
}
