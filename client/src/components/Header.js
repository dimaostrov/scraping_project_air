import React from 'react';
import { Flex } from 'rebass';

const Header = () => {
  return (
    <Flex
      px={2}
      color='white'
      bg='black'
      alignItems='center'>
      <Text p={2} fontWeight='bold'>Rebass</Text>
      <Box mx='auto' />
      <Link
        href='#!'
        p={2}
        color='white'>
        Profile
        </Link>
    </Flex>

  );
}

export default Header;