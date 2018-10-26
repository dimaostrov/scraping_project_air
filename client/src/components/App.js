import React, { Component } from 'react';
import './App.css';
import ReactDataSheet from 'react-datasheet';
import axios from 'axios';

class App extends Component {
  state = {
    selectedCity: '',
    regions: [],
    data: ''
  }

  selectCity = async (city) => {
    const data = await axios.post(`/api/cityname`, { "name": city });
    this.setState({ selectedCity: city, data: data.data });
  }

  render() {
    const cities = ['San Francisco', 'Los Angeles', 'San Diego', 'Nashville', 'Boston', 'Philadephia', 'Key West', 'Portland', 'San Antonio', 'Sedona', 'Austin', 'Chicago', 'Puerto Rico']
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {cities.map(city => <button onClick={() => this.selectCity(city)}>{city}</button>)}
          </div>
          <h3>{this.state.selectedCity}</h3>
          <p>{this.state.data && this.state.data[0].name}</p>
        </header>
      </div>
    );
  }
}

export default App;
