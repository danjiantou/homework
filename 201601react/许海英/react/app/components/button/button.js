import React, { Component } from 'react';

class Button extends Component {
  handleClick(){
    alert('戳我干嘛！');
  }
  render(){
    const style = require('./button.less');
    
    return (
      <button className="my-button" onClick={this.handleClick.bind(this)}>
        快戳我
      </button>
    );
  }
}

export default Button;
