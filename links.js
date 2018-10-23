import axios from 'axios';
import citiesModel from './models/cities.model';
import fs from 'fs';

// SF, SD and LA is 6, Nashvile Tennessee is 44
// Boston MAssachustes is 23
// Philly is in Pennsylvania, ID is 40
// Key West is FL, 11
// Portland 39
// San Antonio 
// Austin both in Texas, id is 45
// Sedona is Arizona, 4
// Chicago is Illinois, 15
// Puerto Rico is 56


const stateIDs = [4, 6, 11, 23, 39, 40, 44, 45, 56]

const TEST_STATE = 6
const access_token = 'MjM3Ng%7C7b476c889c05433a926787864ce07a59';

const zipcodesEndpoint = city_id => `https://api.airdna.co/v1/explorer/zipcodes?access_token=${access_token}&city_id=${city_id}&show_hvi=true`;

const cityEndpoint = state_id => `https://api.airdna.co/v1/explorer/cities?access_token=${access_token}&bedrooms=2&bedrooms=3&state_id=${state_id}`;

const topListings = region_id => `https://api.airdna.co/v1/explorer/top-listings?access_token=${access_token}&bedrooms=2&bedrooms=3&region_id=${region_id}`;

async function go() {
  try {
    const cityData = axios.get(cityEndpoint(TEST_STATE))
    const res = await cityData;
    const cities = res.data.cities;
    cities.map(x => x.city.annual_revenue_potential['50th'] > 40000 && addCityToDB(x.city));
  } catch (e) {
    console.error(e);
  }
}

go()
  /*
   * API endpoints
   * 
   * cities - annual_revenue_potential, name of the city
   * 
   * zipcodes - we have zipcodes, takes in a state ID, also annual_rental_earning_potential
   *      result.zip_codes.filter(zip => zip.annual_revenue_potential.50th > 40000 && {...zip})       
   *      also result.zip_codes.map(zip => region_id)
   * top-listings - 25 of the top listings, needs cityID
   * 
   * 
   */

const addCityToDB = (city) => {
  citiesModel.create(city, (err, record) => {
    if (err) return (err);
    console.log('saved city' + record);
  })
}

const writeToFile = (res, fileNameToWrite) => {
  fs.writeFileSync(`./data/${fileNameToWrite}.json`, JSON.stringify(res.data, null, 4), (err) => {
    if(err) {
      console.log('An error occured while writing JSON');
      return console.log(err);
    }
    console.log('JSON file has been saved');
    console.log(res);
  });
};
