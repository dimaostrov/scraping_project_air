import React from 'react';
import airStore from '../store';
import Search from './Search';

import { Flex, Box, Text, Button } from 'rebass';
const regions = ['east', 'mideast', 'puertorico', 'midwest', 'west'];


const RegionSelection = () => {
  
  const logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  const logoutButton = localStorage.getItem('jwtToken') && <Button bg='orange' onClick={logout}>Logout</Button>

  return (
    <div>
    <Flex
      p={3}
      color='white'
      bg='black'
      alignItems='center'>
      <Text p={1} fontWeight='bold'>Search</Text>
      <Box mx='auto' />
      <Search />
      <Box mx='auto' />
      {logoutButton}
    </Flex>
      <Flex justifyContent flexWrap>
      {regions.map(x => <RegionBtn name={x} key={x} />)}
      </Flex>
    </div>
  );
}

const RegionBtn = ({ name }) =>
  <Button
    p={0.5}
    key={name}
    bg='teal'
    onClick={() => airStore.setUsRegion(name)}
  >
    {name}
  </Button>



export default RegionSelection;