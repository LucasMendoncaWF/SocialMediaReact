import React, { Component } from 'react';
import '../css/feed.css';
import UserUpdate from './user-update';
import TimeLineUpdates from './time-line';
import MobileProfile from './mobile-profile'

class Feed extends Component{

 render(){
     return (
         <div className="feed-container">    
             <MobileProfile userData={this.props.userData}/>        
             <UserUpdate addUpdateFunction={this.props.addUpdateFunction}/>
            {this.props.updates.map(i => {
                if(this.props.filter === ''){
                    return <TimeLineUpdates key={i.key} photo={i.Photo} name={i.Name} date={i.Date} text={i.Text} attachImage={i.AttachImage}/>
                }else{
                    var name = i.Name.toLowerCase();
                    var text = i.Text.toLowerCase();
                    var filtro = this.props.filter.toLowerCase();
                    if((name).indexOf(filtro) !== -1 || (text).indexOf(filtro) !== -1)
                    return <TimeLineUpdates key={i.key} photo={i.Photo} name={i.Name} date={i.Date} text={i.Text} attachImage={i.AttachImage}/>
                }
            })}
         </div>
     )
 }
}

export default Feed;
