import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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

  getRegion = (x) => {
    axios.post('/api/region', { region: x})
    .then((result) => {
      this.setState({ regions: result.data });
    })
    .catch((error) => {
      if(error) {
        this.setState({ message: 'couldn\'t get region' });
      }
    });
  }

  render() {
    const logoutButton = localStorage.getItem('jwtToken') && <button className="btn btn-warning" onClick={this.logout}>Logout</button>
    const regions = ['east', 'mideast', 'puertorico', 'midwest', 'west'];
    const regionBtn = (name) => <button className="btn btn-success" style={{marginRight: '2rem'}} onClick={() => this.getRegion(name)}>{name}</button>
    return (
      <div className="App">
        <h3 style={{margin: '2rem'}}>Select a Region:</h3>
          <div>
          {regions.map(x => regionBtn(x))}
        {logoutButton}
          </div>
          {this.state.regions && 'insert chart here'}
      </div>
    );
  }
}

export default App;
