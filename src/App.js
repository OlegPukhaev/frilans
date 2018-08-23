import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// ../../node_modules/j-toker/src/
var Auth = require('./j-toker.js');
    
Auth.configure({
    apiUrl: '../api'
});

class App extends Component {
  constructor (){
    super();

    this.state = {
                    email: "nuba8184@gmail.com",
                    password: "12345678",
                    apiUrl: '../api'
                };
  }

 handleRegistrationClick() {

      Auth.emailSignUp({
        email: 'test@test.com',
        password: '123456',
        password_confirmation: '123456',
        config: 'altUser'
      })
      .then(response => {
            console.log("yes");
          })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {this.handleRegistrationClick()}
        </p>
      </div>
    );
  }
}

export default App;
