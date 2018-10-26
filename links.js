import axios from 'axios';
import Bottleneck from 'bottleneck';
import citiesModel from './models/cities.model';
import regionsModel from './models/regions.model';
import colors from 'colors';
import { connectToDb, disconnectFromDB } from './db/connect';
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


const stateIDsLeftToGet = [40, 39, 45, 15, 56]
//still need Philadelphia, Portland, San Antonio, Austin, Chicago, Puerto Rico

const limiter = new Bottleneck({
  minTime: 333,
  maxConcurrent: 1,
});

const stateIDs = [4, 6, 11, 23, 39, 40, 44, 45, 56]

const chicago = 15;

const TEST_STATE = 4;
const access_token = 'MjM3Ng|6ef535ac88b244a9960751e93cbc0426';

const zipcodesEndpoint = state_id => `https://api.airdna.co/v1/explorer/zipcodes?access_token=${access_token}&state_id=${state_id}&show_hvi=true`;

const cityEndpoint = state_id => `https://api.airdna.co/v1/explorer/cities?access_token=${access_token}&bedrooms=2&bedrooms=3&state_id=${state_id}`;

const topListings = region_id => `https://api.airdna.co/v1/explorer/top-listings?access_token=${access_token}&bedrooms=2&bedrooms=3&region_id=${region_id}`;

async function goRegions(stateId) {
  try {
    const cityData = axios.get(topListings(stateId))
    const res = await cityData;
    const cities = await res.data;
    //cities.map(x => addRegions(x));
    //console.log(cities);
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
    limiter.schedule(() => go(region))
      .then(result => {
        console.log(region, "logged");
      });

    // cities.map(x => go(topListings, x.regions))

  })
}

// scrapeAllRegions();

Array.prototype.diff = function (a) {
  return this.filter(function (i) { return a.indexOf(i) < 0; });
};

const checkWhichRegionsAreNotFilled = async () => {
  const cities = await citiesModel.find({ num_total_listings: { $gt: 14 } });
  const regions = await regionsModel.find();

  let cityRegions = []
  let regionsNotGot = []
  await cities.map(city => cityRegions.push(city.regions));
  await regions.map(region => regionsNotGot.push(region.id));

  let regionsGot = flatten(cityRegions);
  regionsNotGot = flatten(regionsNotGot);


  const difference = await regionsGot.diff(regionsNotGot);
  console.log(difference.length);

  for (let uri of difference) {
    await goRegions(uri);
    await new Promise(res => setTimeout(res, 3000));
  }
  disconnectFromDB();

}

const flatten = (arr) => Array.prototype.concat(...arr);


// checkWhichRegionsAreNotFilled();



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

async function goCitiesAndZip(stateId) {
  try {

    const cityData = axios.get(cityEndpoint(stateId), (err, done) => {
      if (err) console.log(err);
      console.log('done'.random, done);
    })
    const res = await cityData;
    const cities = await res.data.cities;
    await cities.map(x => addCityToDB(x.city));
    console.log('cities done moving to zips');

    const zipData = axios.get(zipcodesEndpoint(stateId))
    const zipRes = await zipData;
    const zips = await zipRes.data.zip_codes;
    await zips.map(zip => addRegionToCity(zip.zip_code));
    checkWhichRegionsAreNotFilled();
  } catch (e) {
    console.error(e.random);
  }
}

async function runProgram() {
  await connectToDb();

  await goCitiesAndZip(chicago);
  await new Promise(res => setTimeout(res, 3000));

  // disconnectFromDB();
}

runProgram();

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
  console.log('adding started'.random);
  regionsModel.create({ id: region.area.id, zip: region.area.name, top_listings: region.top_listings }, (err, result) => {
    if (err) console.log(err);
    console.log(`${result.zip} added`.random);
  })
}

const addCityToDB = (city) => {
  console.log(city.name, city.adr);
  citiesModel.create(city, function (err, record) {
    if (err) console.log(err);
    console.log(record)
  });
}

const addRegionToCity = (zip) => {
  citiesModel.update({ name: zip.city_name }, { $push: { regions: zip.region_id } }, (err, record) => {
    if (err) return err;
    console.log(record);
    console.log('regions added'.rainbow);
  });
}

