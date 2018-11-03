import React from 'react';

const CityInfo = ({ data }) => {
  return (
  <div>
    Annual revenue potential
    <div>50th percentile: {data.annual_revenue_potential['50th']}</div>
    <div>75thth percentile: {data.annual_revenue_potential['75th']}</div>
    <div>90th percentile: {data.annual_revenue_potential['90th']}</div>
    <div>Number of Active listings: {data.num_active_listings}</div>
    <div>Occupancy: {data.occupancy_ltm * 100}%</div>
  </div>);
}

export default CityInfo;