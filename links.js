import axios from 'axios';
import pMap from 'p-map';
import citiesModel from './models/cities.model';
import regionsModel from './models/regions.model';
import fs from 'fs';
import dbConnection from './db/connect';
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

dbConnection();

const stateIDs = [4, 6, 11, 23, 39, 40, 44, 45, 56]

const TEST_STATE = 6
const access_token = 'MjM3Ng|0f8a7a956b8b43cfa467882365a19e23';

const zipcodesEndpoint = state_id => `https://api.airdna.co/v1/explorer/zipcodes?access_token=${access_token}&state_id=${state_id}&show_hvi=true`;

const cityEndpoint = state_id => `https://api.airdna.co/v1/explorer/cities?access_token=${access_token}&bedrooms=2&bedrooms=3&state_id=${state_id}`;

const topListings = region_id => `https://api.airdna.co/v1/explorer/top-listings?access_token=${access_token}&bedrooms=2&bedrooms=3&region_id=${region_id}`;

async function go(stateId) {
  try {
    await setTimeout(function(){ console.log('wait'); }, 8000)
    const cityData = axios.get(topListings(stateId))
    const res = await cityData;
    const cities = await res.data;
    //cities.map(x => addRegions(x));
    addRegions(cities);
  } catch (e) {
    console.error(e);
  }
}

// stateIDs.map(x => go(zipcodesEndpoint, x));
// go(topListings, 957);

const scrapeAllRegions = () => {
  citiesModel.find({}, (err, cities) => {
    const region = cities.map(x => x.regions);
    pMap(region, go, {concurrency: 4})
      .then(result => {
        console.log(region, "logged");
      });

    // cities.map(x => go(topListings, x.regions))

  })
}

scrapeAllRegions();


/*
citiesModel.find({}, function(err, cities){
  cities.map(async city => {
    let city_id = city.city_id;
    const zipCodeData = axios.get(zipcodesEndpoint(city_id));
    const res = await zipCodeData;
    console.log(res);
    res.map(zip => {
      let name = zip.zip_code.name;
      citiesModel.update({ name: name }, { $set: { zip: zip.zip_code }}, (err, done) => {
        if(err) return err;
        console.log(done, 'done');
      });
  
    }) 
  })
})
*/

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

const addRegions = (region) => {
  regionsModel.create({id: region.area.id, zip: region.area.name, top_listings: region.top_listings})
}

const addCityToDB = (city) => {
  
  citiesModel.create(city, function (err, record) {
    if (err) return err;
    console.log(record)
  });
}

const addRegionToCity = (zip) => {
  citiesModel.update({name: zip.city_name}, { $push: { regions: zip.region_id }}, (err, record) => {
    if (err) return err;
    console.log(record);
  });
}

const writeToFile = (res, fileNameToWrite) => {
  fs.writeFileSync(`./data/${fileNameToWrite}.json`, JSON.stringify(res.data, null, 4), (err) => {
    if (err) {
      console.log('An error occured while writing JSON');
      return console.log(err);
    }
    console.log('JSON file has been saved');
    console.log(res);
  });
};
