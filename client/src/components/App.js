import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
// import ReactDataSheet from 'react-datasheet';
import ZaL from './ZipAndListings';

class App extends Component {
  state = {
    selectedCity: '',
    regions: [],
    data: false
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
  }

  selectCity = (city) => {
    axios.post(`/api/listings`, { "name": city })
      .then(res => {
        this.setState({ selectedCity: city, data: res.data });
      })
      .catch(err => {
        if (err.response.status === 401) {
          this.props.history.push('/login');
        }
      });
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    const cities = ['San Francisco', 'Los Angeles', 'San Diego', 'Nashville', 'Boston', 'Philadephia', 'Key West', 'Portland', 'San Antonio', 'Sedona', 'Austin', 'Chicago', 'Puerto Rico']
    const listings = this.state.data && this.state.data.map(zip => <ZaL props={zip} />);
    const logoutButton = localStorage.getItem('jwtToken') && <button class="btn btn-primary" onClick={this.logout}>Logout</button>
    return (
      <div className="App">
        {logoutButton}
        <header className="App-header">
          <div>
            {cities.map(city => <button onClick={() => this.selectCity(city)}>{city}</button>)}
          </div>
          <h3>{this.state.selectedCity}</h3>
        </header>
        <div>{listings}</div>
      </div>
    );
  }
}

export default App;
