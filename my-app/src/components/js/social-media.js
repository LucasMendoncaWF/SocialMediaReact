import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import '../css/social-media.css';
import UserProfile from './user-profile';
import Feed from './feed';
import Header from './header.js';

var name = "Lucas Mendonça";
var userDesc= "Hi! i'm a react developer.";
var followers = 542;
var following = 673;

var userData=[{
  userPicture: logo,
  userName: name,
  userDescription: userDesc,
  followers: followers,
  following: following
}]

var updates = [
  {
    key: 0,
    Photo: 'https://comps.canstockphoto.com/man-profile-stock-photo_csp12137449.jpg',
    Name: 'Jonas',
    Date: '08/02/2018',
    Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus tortor libero, a facilisis justo vulputate eget. Pellentesque ultricies bibendum semper. Fusce tempor elit ut velit rhoncus, at elementum justo condimentum. Pellentesque imperdiet rhoncus congue. Praesent ut mauris vitae nisl bibendum posuere.',
    AttachImage: 'https://conteudo.imguol.com.br/blogs/138/files/2017/12/exotico.jpg'
  },
  {
    key: 1,
    Photo: 'http://media.gettyimages.com/photos/mujer-afro-mirando-de-perfil-picture-id626959246?s=170667a&w=1007',
    Name: 'Vivian',
    Date: '08/02/2018',
    Text: 'Integer felis justo, maximus a augue id, vestibulum sollicitudin eros. Duis vestibulum, augue sed sodales egestas, eros velit porta leo, quis efficitur mauris nisl id lectus. Vivamus nisi ante, viverra eu tellus vel, lobortis posuere nulla. Nunc sagittis eleifend laoreet. Nulla aliquam, est quis viverra blandit, magna diam sagittis quam, id aliquet ipsum quam nec velit. Phasellus egestas nulla libero, eleifend varius sem molestie ac. Nam lorem neque, scelerisque a congue nec, fermentum a turpis. Nam tempor, erat in dictum lacinia, massa nulla congue massa, iaculis volutpat lorem tortor nec nibh.',
    AttachImage: ''
  },
  {
    key: 2,
    Photo: 'https://t3.ftcdn.net/jpg/01/40/46/10/500_F_140461012_DrRCS4d6cHh9Iirc9IsX9eXkCf8zCyCF.jpg',
    Name: 'Alex',
    Date: '08/01/2018',
    Text: 'Duis at tincidunt ante. Suspendisse aliquet nisl sit amet velit ultricies lobortis ut vel arcu.',
    AttachImage: ''
  }
]
class SocialMedia extends Component { 
  state ={
    updates: updates,
    filter: ''
  }

  filter = (textFilter) =>{
    this.setState({filter: textFilter});
  }

  timelineAddUpdate = (text, files) =>{
    if(text || files){
      var todayDate = new Date();
      var date = todayDate.getDate() < 10? '0' + todayDate.getDate(): todayDate.getDate();
      var month = todayDate.getMonth() < 10? '0' + todayDate.getMonth(): todayDate.getMonth();
      var today = month + '/' + date + '/' + todayDate.getFullYear();
      var timeLineUpdates = this.state.updates;
      timeLineUpdates.push({Name: name.split(' ')[0], key: this.state.updates.length, Photo: logo, Date: today, Text: text, AttachImage: files});
      var first = this.state.updates.length - 1;
      timeLineUpdates.sort(function(x,y){ return x.key === first ? -1 : y.key === first ? 1 : 0; });
      this.setState({updates: timeLineUpdates});
    }
  }

  render() {
    return (
      <div className="page">
        <Header filterFunction={this.filter}/>  
        <div className="container-middle">      
          <UserProfile userData={userData}/>
          <Feed userData={userData} filter={this.state.filter} updates={updates} addUpdateFunction={this.timelineAddUpdate}/>
        </div>
      </div>
    );
  }
}

export default SocialMedia;
