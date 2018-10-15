import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component{
    render(){
        return (
            <div className="header-container">
                <div className="site-name">Project - Social Media</div>
                <div className="search-area">
                    <input type="text" className="search-input" placeholder="Search..."/>
                </div>
            </div>
        )
    }
}

export default Header;