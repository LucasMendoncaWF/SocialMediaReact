import React, { Component } from 'react';
import '../css/user-profile.css';
import Links from './links'

class UserProfile extends Component {
  render() {
    return (
      <div className="user-profile">
        <div className="user-picture">
          <img alt="profile" src={this.props.userPicture}></img>
        </div>
        <div className="user-name">{this.props.userName}</div>
        <div className="user-description">{this.props.userDescription}</div>
        <div className="profile-data">
          <div className="edit-profile-button user-data"><div className="edit-profile-button-text">Edit Profile</div></div>
          <div className="user-data-divider"></div>
          <div className="user-followers user-data">
          Followers
           <div className="user-numbers">{this.props.followers}</div>
          </div>
          <div className="user-data-divider"></div>
          <div className="user-following user-data">
          Following
            <div className="user-numbers">{this.props.following}</div>
          </div>
        </div>
        <Links />
      </div>
    );
  }
}

export default UserProfile;
