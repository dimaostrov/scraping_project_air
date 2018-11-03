import React, { useState } from 'react';

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
  console.log('properties is', properties);
  return (
    <div>
      {properties && properties[0].map((x, i) => <Row key={i} apt={x[0]['listing']} />)}
    </div>
  )
}

const Row = ({ apt }) => {
  console.log('apt is', apt)
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