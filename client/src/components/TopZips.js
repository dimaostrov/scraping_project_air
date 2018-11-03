import React from 'react';

const TopZips = ({data}) => {
  return ( <div>
    {data.map(x => <Zip zip={x.zip}/>)}
  </div> );
}

const Zip = ({zip}) => 
<div>
  <span>{zip}</span>
</div>
 
export default TopZips;