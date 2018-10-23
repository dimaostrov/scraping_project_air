import mongoose from 'mongoose';

const citieschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
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