import axios from 'axios';
import pMap from 'p-map';
import citiesModel from './models/cities.model';
import regionsModel from './models/regions.model';
import fs from 'fs';
import {connectToDb, disconnectFromDB } from './db/connect';

connectToDb();

const stateIDs = [4, 6, 11, 23, 39, 40, 44, 45, 51, 56]

const access_token = 'MjM3Ng|2e7578d964954aa68f57209e47ea6039';

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