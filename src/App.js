import logo from './logo.svg';
import './App.css';

const apiURL = "https://demo-api.incodesmile.com/";
const apiKey = "570c70d1693636fdc200713415ebc3973afbdf19";


const helloSdk = window.Hello.create({
  apiKey: apiKey,
  apiURL: apiURL,
});

helloSdk.renderLogin(document.getElementById('root'), {

  onSuccess: r => {
    console.log('onSuccess', r)
    document.getElementById('root').innerHTML = `Welcome Back, your token is ${r.token}`
  },
  onError: r => {
    console.log('on error', r)
  },
})

function App() {
  return (
    <div className="App">
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
      </header>
    </div>
  );
}

export default App;
