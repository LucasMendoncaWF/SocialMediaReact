import React, { Component } from 'react';
import '../css/user-update.css';

class UserUpdate extends Component { 
state={
  inputValue: '',
  files: ''
}

  updateInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  emptyUpdateArea = () =>{
    this.setState({
      inputValue: '',
      files: ''
    });
  }

  focusInputFile = () =>{
    this.elem.click();
  }

  fileShow = (event) =>{
    this.setState({files: URL.createObjectURL(event.target.files[0])});
  }

  render() {
    return (
      <div className="user-update">
        <div className="user-update-area">
            <textarea className="user-update-input" rows="5" maxLength="1000" placeholder="Say something to your friends..." value={this.state.inputValue} onChange={this.updateInputValue}></textarea>
            <div className="update-buttons"> 
                <div className="botao-attach" onClick={this.focusInputFile}>Attach image </div>
                <input type="file" className='hide-input' accept="image/x-png,image/gif,image/jpeg" onChange={this.fileShow} ref={(elem) => {this.elem = elem}}></input>
                <div className="botao-enviar-update" onClick={() =>{this.props.addUpdateFunction(this.state.inputValue, this.state.files); this.emptyUpdateArea();}}>Enviar</div>            
            </div>
            <div className='upload-images'>
            {(() =>{
              if(this.state.files !== ''){
                return  <div className='upload-image'><img alt='upload' src={this.state.files}></img></div>
              }
            })()}            
            </div>
        </div>
      </div>
    );
  }
}

export default UserUpdate;
