import React from 'react';
import styled from 'styled-components/native';
import BannerCarousel from '@components/organisms/BannerCarousel';
import { Classes } from '@components/organisms/Classes';
import { banners } from '@data';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.dark};
  flex: 1;
`;

const Home = () => {
  return (
    <Wrapper>
      <BannerCarousel data={banners} />
      <Classes />
    </Wrapper>
  );
};

export default Home;
