import { observable, computed, action, decorate } from "mobx";
import axios from 'axios';
import makeInspectable from 'mobx-devtools-mst';

const getRegions = async (cityName) => {
  const res = await axios.post('/api/listings', {name: cityName})
  console.log('region is ', await res.data)
  return res.data
}

const getCityInfo = async (cityName) => {
  const res = await axios.post('/api/cityname', {name: cityName})
  console.log('cityInfo is ', await res.data)
  return res.data;
}

const getUsRegions = async (regionName) => {
  const res = await axios.post('/api/region', {region: regionName})
  console.log('usregions are', await res.data);
  return await res.data
}

class Store {
  searchTerm = '';
  city = '';
  cityInfo = '';
  usRegion = '';
  region = '';
  topListings = '';

  setCity = async (val) => {
    this.city = val; 
    this.cityInfo = await getCityInfo(this.city);
    this.usRegion = '';
    this.region = await getRegions(this.city);
    this.topListings = '';
  }

  setUsRegion = (val) => {
    this.usRegion = val;
    this.region = getUsRegions(val);
    this.city = '';
    this.cityInfo = '';
    this.topListings = '';
  }

  }

decorate(Store, {
  searchTerm: observable,
  city: observable,
  usRegion: observable,
  region: observable,
  topListings: observable,
  setCity: action,
  setUsRegion: action
});

const airStore = new Store()
makeInspectable(airStore);

export default airStore;
