import React from 'react';
import airStore from '../store';

const regions = ['east', 'mideast', 'puertorico', 'midwest', 'west'];

const RegionSelection = () => {
  return (
    <div>
      {regions.map(x => <RegionBtn name={x} key={x} />)}
    </div>
  );
}

const RegionBtn = ({name}) =>
  <button
    key={name}
    className="btn btn-success"
    style={{ marginRight: '2rem' }}
    onClick={() => airStore.setUsRegion(name)}
  >
    {name}
  </button>



export default RegionSelection;