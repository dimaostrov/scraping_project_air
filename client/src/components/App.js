import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import airStore from '../store';
import { observer } from 'mobx-react'
// import DevTools from 'mobx-react-devtools'
import RegionSelection from './RegionSelection';
import { RegionsScatter } from './ScatterChart';
import TopZips from './TopZips';
import CityInfo from './CityInfo';
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

  render() {
    return (
      <div className="App">
        <div>
          <RegionSelection />
        </div>
        {airStore.city && <h2>{airStore.city}</h2>}
        {airStore.cityInfo && <CityInfo data={airStore.cityInfo} />}
        {airStore.regions && <RegionsScatter data={airStore.regions} />}
        {airStore.topZips && <TopZips topData={airStore.topZips} allData={airStore.zips} />}
      </div>
    );
  }
}

App = observer(App)

export default App;

// .map(x => <div>{x}</div>)