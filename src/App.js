import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


var apiURL = "https://demo-api.incodesmile.com/";
const apiKey = "570c70d1693636fdc200713415ebc3973afbdf19";

const helloSdk = window.Hello.create({
  apiKey: apiKey,
  apiURL: apiURL,
});

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  renderLogin() {

    
    helloSdk.createSession('MX').then(token => {
      console.log(token)
      navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(function(mediaStream) {
        helloSdk.renderLogin(document.getElementById('incode'), {

          onSuccess: r => {
            console.log('onSuccess', r)
            document.getElementById('root').innerHTML = `Welcome Back, your token is ${r.token}`
          },
          onError: r => {
            console.log('on error', r)
            //no estas en sistema te vamos a registrar
          },
        },token)
      }).catch(function(err) {
        console.log(err)
      });
    })
}

  render (){
    return <div id="incode" className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id='success'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={this.renderLogin}>load login</button>
      </header>
    </div>
  }
}

export default App;
