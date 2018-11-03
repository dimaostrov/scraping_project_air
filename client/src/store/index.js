import { observable, computed, action, decorate } from "mobx";
import axios from 'axios';
import makeInspectable from 'mobx-devtools-mst';

const getRegions = async (cityName) => {
  const res = await axios.post('/api/listings', {name: cityName})
  return await res.data
}

const getCityInfo = async (cityName) => {
  const res = await axios.post('/api/cityname', {name: cityName})
  return await res.data[0];
}

const getUsRegions = async (regionName) => {
  const res = await axios.post('/api/region', {region: regionName})
  return await res.data
}

const topZipByCity = async (cityName) => {
  const res = await axios.post('/api/topzipbycity', {name: cityName})
  return await res.data
}

class Store {
  searchTerm = '';
  city = '';
  cityInfo = '';
  usRegion = '';
  regions = '';
  zips = '';
  topZips = '';
  topListings = '';
  zipSelected = '';
  zipProperties = '';
  
  setCity = async (val) => {
    this.city = val; 
    this.cityInfo = await getCityInfo(this.city);
    this.usRegion = '';
    this.regions = '';
    this.zips = await getRegions(this.city);
    this.topZips = await topZipByCity(this.city);
    this.topListings = '';
  }
  
  setUsRegion = async (val) => {
    this.usRegion = val;
    this.regions = await getUsRegions(val);
    this.city = '';
    this.cityInfo = '';
    this.topListings = '';
  }

  }

decorate(Store, {
  searchTerm: observable,
  city: observable,
  usRegion: observable,
  regions: observable,
  zips: observable,
  topZips: observable,
  topListings: observable,
  setCity: action,
  setUsRegion: action,
  zipSelected: observable,
  zipProperties: observable,
});

const airStore = new Store()
makeInspectable(airStore);

export default airStore;
