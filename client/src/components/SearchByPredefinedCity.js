import React from 'react';
import ZaL from './ZipAndListings';
import axios from 'axios';


const SearchByPredefinedCity = () => {
  state = {
    selectedCity: '',
    regions: [],
    data: false
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


  const cities = ['San Francisco', 'Los Angeles', 'San Diego', 'Nashville', 'Boston', 'Philadelphia', 'Key West', 'Portland', 'San Antonio', 'Sedona', 'Austin', 'Chicago']
  const listings = this.state.data && this.state.data.map(zip => <ZaL props={zip} key={zip} />);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {cities.map(city => <button key={city} onClick={() => this.selectCity(city)}>{city}</button>)}
        </div>
        <h3>{this.state.selectedCity}</h3>
      </header>
      <div>{listings}</div>
    </div>
  );

}

export default SearchByPredefinedCity;