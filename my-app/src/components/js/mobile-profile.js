import React, { Component } from 'react';
import '../css/mobile-profile.css';

class MobileProfile extends Component{
    render(){
        return (
        <div className="mobile-profile">
            <div className="mobile-profile-data">
                <div className="mobile-user-picture">
                    <img alt="profile" src={this.props.userData[0].userPicture}></img>
                </div>
                <div className="mobile-user-data-divider"></div>
                <div className="mobile-user-followers mobile-user-data">
                Followers
                    <div className="mobile-user-numbers">{this.props.userData[0].followers}</div>
                </div>
                <div className="mobile-user-data-divider"></div>
                <div className="mobile-user-following mobile-user-data">
                Following
                    <div className="mobile-user-numbers">{this.props.userData[0].following}</div>
                </div>
            </div>
        </div>
        )
    }
}

export default MobileProfile;