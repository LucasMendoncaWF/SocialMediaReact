import React, { Component } from 'react';
import '../css/user-update.css';

class SocialMedia extends Component { 
  render() {
    return (
      <div className="user-update">
        <div className="user-update-area">
            <textarea className="user-update-input" rows="5" maxLength="1000" placeholder="Say something to your friends..."></textarea>
            <div className="update-buttons"> 
                <div className="botao-attach">Attach image</div>
                <div className="botao-enviar-update">Enviar</div>
            </div>
        </div>
      </div>
    );
  }
}

export default SocialMedia;
