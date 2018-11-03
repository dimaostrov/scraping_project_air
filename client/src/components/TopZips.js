import React, { useState } from 'react';
import ReactTable from 'react-table';

const TopZips = ({ topData, allData }) => {
  const [listings, setListings] = useState('');
  const pickOutZip = (zip) => {
    let property = allData.filter(x => x.zip == zip)
    setListings(property)
  }

  return (<div>
    {listings && <Listings list={listings} />}
    {topData.map(x => <Zip key={x[0]} zip={x[0]} set={() => pickOutZip(x[0])} />)}
  </div>);
}

const Zip = ({ zip, set }) =>
<div>
    <span onClick={set}>{zip}</span>
  </div>

const Listings = ({ list }) => {
  let properties = list.map(x => x.top_listings);
  // fix up the data json by moving item[0]['listing'] up a couple of nested levels
  let fixedArray = properties[0].map((x) => x[0]['listing']);
  console.log(fixedArray)
  return (
    <div>
      <ReactTable 
        data={fixedArray}
        columns={columns}
      />
    </div>
  )
}

const columns = [{
  Header: 'Title',
  accessor: 'title' // String-based value accessors!
}, {
  Header: 'Revenue',
  accessor: 'revenue_ltm',
}, {
  Header: 'Type',
  accessor: 'property_type'
}, {
  Header: 'Occupancy',
  accessor: 'occupancy_ltm'
}, {
  Header: 'Num Reviews',
  accessor: 'num_reviews'
}, {
  Header: 'Image Link',
  accessor: 'cover_image'
}, {
  Header: 'Bedrooms',
  accessor: 'bedrooms'
}, {
  Header: 'Revenue Potential',
  accessor: 'annual_revenue_potential'
}, {
  Header: 'Yearly Rental Cost',
  accessor: '30360'
}]

const Row = ({ apt }) => {
  return (
    <div>
      <span>{apt.title}</span>
      <span>{apt.annual_rental_cost}</span>
      <span>{apt.annual_revenue_potential}</span>
      <span>{apt.bedrooms}</span>
      <span>{apt.num_reviews}</span>
    </div>
  )
}

export default TopZips;

/*

*/