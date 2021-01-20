import React from 'react';
import styled from 'styled-components/native';
import BannerCarousel from '@components/organisms/BannerCarousel';
import { Classes } from '@components/organisms/Classes';
import { classes } from '@data/classes';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.dark};
  flex: 1;
`;

const Home = () => {
  return (
    <Wrapper>
      <BannerCarousel data={classes} />

      <Classes data={classes} />
    </Wrapper>
  );
};

export default Home;
