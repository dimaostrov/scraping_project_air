import React from 'react';

const ZipAndListings = props => {
  const { zip, top_listings } = props.props;
  const listingElement = top_listings.map(x => <Listings props={x[0].listing} />)
  return ( <div>
    <h3>{zip}</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>{listingElement}</div>  
  </div>
   );
}

const Listings = props => {
  const {city, property_type, title, annual_revenue_potential} = props.props;
  return ( <span style={{ margin: '4rem', border: '1px white', width: '7rem', height: '7rem'}}>
    <h5>{title}</h5>
    <p>{`${property_type} located in ${city}, $ ${annual_revenue_potential}`}</p>
  </span> );
}
 

 
export default ZipAndListings;