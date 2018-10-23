import mongoose from 'mongoose';

const citieschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  occupancy_ltm: {
    type: Number,
    required: true,
  },
  city_id: {
    type: Number,
    required: true,
    unique: true,
  },
  num_total_listings: {
    type: Number,
    required: true,
  },
  num_active_listings: {
    type: Number,
    required: true,
  },

},
  { collection: 'city' });

const citiesModel = mongoose.model('city', citieschema);

citiesModel.getAll = () => {
  return citiesModel.find({});
}

citiesModel.addcity = (cityToAdd) => {
  return cityToAdd.save();
}

citiesModel.removecity = (cityName) => {
  return citiesModel.remove({ name: cityName });
}

export default citiesModel;