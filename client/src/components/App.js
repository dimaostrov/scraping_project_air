import React, { Component } from 'react';
import './App.css';
import ReactDataSheet from 'react-datasheet';
class App extends Component {
  state = {
    selectedCity: '',
    regions: []
  }

  selectCity = (city) => {
    this.setState({ selectedCity: city })
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
        </header>

      </div>
    );
  }
}

export default App;
