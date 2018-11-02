import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Search from './Search';
import airStore from '../store';
import { observer } from 'mobx-react'
// import DevTools from 'mobx-react-devtools'
import RegionSelection from './RegionSelection';

// import ReactDataSheet from 'react-datasheet';
class App extends Component {
  state = {
    selectedCity: '',
    regions: [],
    data: false,
    message: ''
  }

  componentDidMount() {
    const auth = localStorage.getItem('jwtToken');
    axios.defaults.headers.common['Authorization'] = auth;
    if (!auth) window.location = '/login';
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }


  render() {
    const logoutButton = localStorage.getItem('jwtToken') && <button className="btn btn-warning" onClick={this.logout}>Logout</button>
    return (
      <div className="App">
        <h3 style={{ margin: '2rem' }}>Select a Region:</h3>
        <div>
          <RegionSelection />
          {logoutButton}
        </div>
        <Search />
        {airStore.regions && 'insert chart here'}
      </div>
    );
  }
}

App = observer(App)

export default App;
