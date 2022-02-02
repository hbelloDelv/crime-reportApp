import React from 'react';
import './sidbar.css';
import { SidebarData } from './SidebarData';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebar-List">
            {SidebarData.map((val, key)=>{
                return(
                    <li className="row" 
                    id={window.location.pathname == val.Link ? "active" :  ""}
                    key={key} 
                    onClick={(e) =>{
                        e.preventDefault();
                        window.location.pathname = val.Link
                    }}> 
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Sidebar
