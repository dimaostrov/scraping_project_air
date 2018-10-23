import axios from 'axios';
import citiesModel from './models/cities.model';

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

const TEST_STATE = 34

const ZIPCODES_ENDPOINT = city_id => `https://api.airdna.co/v1/explorer/zipcodes?access_token=MjM3Ng%7C045672c381ee436dab98752d4361478a&city_id=${city_id}&show_hvi=true`;

const CITYID_ENDPOINT = state_id => `https://api.airdna.co/v1/explorer/cities?access_token=MjM3Ng%7C045672c381ee436dab98752d4361478a&bedrooms=2&bedrooms=3&state_id=${state_id}`;

const TOP_LISTINGS = region_id => `https://api.airdna.co/v1/explorer/top-listings?access_token=MjM3Ng%7C045672c381ee436dab98752d4361478a&bedrooms=2&bedrooms=3&region_id=${region_id}`;

async function go() {
  try {
    const cityData = axios.get(CITYID_ENDPOINT(TEST_STATE))
    console.log(await cityData);
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
