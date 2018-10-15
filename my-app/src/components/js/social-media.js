import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import '../css/social-media.css';
import UserProfile from './user-profile';
import Feed from './feed';
import Header from './header.js';

var name = "Lucas Mendonça Pedroso";
var userDesc= "Hi! i'm a react developer.";
var followers = 542;
var following = 673;

class SocialMedia extends Component { 
  render() {
    return (
      <div className="page">
        <Header />  
        <div className="container-middle">      
          <UserProfile userPicture={logo} userName={name} userDescription={userDesc} followers={followers} following={following}/>
          <Feed />
        </div>
      </div>
    );
  }
}

export default SocialMedia;
