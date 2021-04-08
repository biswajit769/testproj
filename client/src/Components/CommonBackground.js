import React from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import lightBackground from '../Assets/advanced-ai-anatomy-artificial.jpeg';
import darkBackground from '../Assets/landing_background_dark.jpg';

const CommonBackground = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      align='initial'
      justify='initial'
      direction='column'
      flex='1'
      minHeight='92vh'
      marginTop='8vh'
      background='blackAlpha.100'
      bgPosition='cover'
      bgRepeat='no-repeat'
      bgSize='cover'
      backgroundAttachment='fixed'
      px='14px'>
      {children}
    </Flex>
  );
};

CommonBackground.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

export default CommonBackground;
