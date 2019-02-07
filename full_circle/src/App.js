import React, { Component } from 'react';

import './App.css';

class App extends Component {
  btnClick(){
    alert("button is clicked");
  }  
  render() {
    return (
      <div>
          <p>{this.props.children}</p>
          <button onClick={this.btnClick}>click here </button>
       
      </div>
    );
  }
}

export default App;
