import React from 'react';
import logo from './images/logo.png'
import name from './images/name.png'
import menu from './images/menu.png'

const TopBar = (props) => {
    return ( 
    <div className="top-bar">
    <button className="top-bar-menu" style={{paddingLeft:10,background:"white",border:"none"}}><img src={menu} alt="menu"/></button>
    <div className="logo">
        <img src={logo} alt="logo" style={{width:80,height:70}}/>
        <span style={{paddingLeft:20}}></span>
        <img src={name} alt="name"/>
    </div>
    </div>
     );
}
 
export default TopBar;