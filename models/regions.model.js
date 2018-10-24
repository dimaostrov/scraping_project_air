import mongoose from 'mongoose';

const regionSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    index: true,
  },
  zip: {
    type: String,
  },
  top_listings: [
    {
      type: Array
    }
  ]

},
  { collection: 'region' });

const regionsModel = mongoose.model('region', regionSchema);

regionsModel.getAll = () => {
  return regionsModel.find({});
}

regionsModel.addCity = (cityToAdd) => {
  return cityToAdd.save();
}

regionsModel.removeCity = (cityName) => {
  return regionsModel.remove({ name: cityName });
}

export default regionsModel;