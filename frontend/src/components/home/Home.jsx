import React from 'react';
import Hero from '../hero-section/Hero';
import Content from '../home-content/Content';
import './home.css'

export default function Home() {
    return (
        <div className="home">
            <Hero />
            <Content />
        </div>
    )
}
