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

regionsModel.returnListings = (arrayOfIDs) => {
  const listings = arrayOfIDs.map(id => regionsModel.find({id: id}));
  return listings;
}


export default regionsModel;