import React, { Component } from 'react';
import '../css/header.css';
import searchIcon from '../../images/search_icon.png'

class Header extends Component{

    updateInputValue = (e) => {
        this.props.filterFunction(e.target.value)
    }

    render(){
        return (
            <div className="header-container">
                <div className="site-name">Project - Social Media</div>
                <div className="search-area">
                    <input type="text" className="search-input" onChange={this.updateInputValue} placeholder="Search..."/>
                    <div className='search-icon'><img alt='search' src={searchIcon}></img></div>
                </div>
            </div>
        )
    }
}

export default Header;