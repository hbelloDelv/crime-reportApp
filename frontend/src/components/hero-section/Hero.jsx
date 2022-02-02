import React from 'react';
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa';
import './hero.css'

export default function Hero() {
    return (
        <div className="hero">
            <button className="hero-btn"><FaUser className="hero-btnIcon"/><Link to="/report" className="link">Report a Crime</Link></button>
        </div>
    )
}
