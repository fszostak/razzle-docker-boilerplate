import React from 'react';
import logo from './react.svg';
import './Home.css';
import keys from './keys';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle running on Docker</h2>
        </div>
        <ul className="Home-resources">
          <li>
            HELLO={keys.HELLO}
          </li>
          <li>
            API_BASEURL={keys.API_BASEURL}
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
