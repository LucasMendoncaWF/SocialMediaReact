import React, { Component } from 'react';
import '../css/feed.css';
import UserUpdate from './user-update';

class Feed extends Component{
 render(){
     return (
         <div className="feed-container">
             <UserUpdate />
         </div>
     )
 }
}

export default Feed;