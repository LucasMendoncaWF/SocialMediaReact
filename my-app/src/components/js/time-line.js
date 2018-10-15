import React, { Component } from 'react';
import '../css/time-line.css';

class TimeLineUpdates extends Component { 
  render() {
    return (
      <div className="timeline-update">
        <div className="update-header">
            <div className="profile-picture"><img alt='profile' src={this.props.photo}></img></div>
            <div className="profile-name">{this.props.name}</div>
            <div className="profile-date">{this.props.date}</div>
        </div>
        <div className="update-text">{this.props.text}</div>
        {(() => {
            if(this.props.attachImage !== ''){
                return <div className="attach-image"><img alt="attach" src={this.props.attachImage}></img></div>
            }
        })()}        
      </div>
    );
  }
}

export default TimeLineUpdates;