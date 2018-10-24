import mongoose from 'mongoose';

const citieSchema = mongoose.Schema({
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
  boundary: {
    type: Object,
  },
  annual_revenue_potential: {
    type: Object
  },
  regions: [{
    type: Number, unique: true
  }],
  top_properties: [
    {
      type: Object, unique: true
    }
  ]

},
  { collection: 'city' });

const citiesModel = mongoose.model('city', citieSchema);

citiesModel.getAll = () => {
  return citiesModel.find({});
}

citiesModel.getByCity = (cityName) => {
  return citiesModel.find({name: cityName});
}

export default citiesModel;