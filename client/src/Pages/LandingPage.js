import React from 'react';
import { Container } from '@chakra-ui/react';

import Hero from '../Components/Hero';
import ProjectSelector from '../Components/ProjectSelector';
import Background from '../Components/Background';

const LandingPage = () => {
  return (
    <Background>
      <Container centerContent>
        <ProjectSelector/>
      </Container>
    </Background>
  );
};

export default LandingPage;
