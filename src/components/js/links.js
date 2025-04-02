import React, { Component } from 'react';
import '../css/links.css';

class Links extends Component{
    render(){
        return (
            <div className="links-list">
                <div className="link">Groups</div>
                <div className="link">Events</div>
                <div className="link">Recent activities</div>
                <div className="link">Suggested for you</div>
            </div>
        )
    }
}

export default Links;