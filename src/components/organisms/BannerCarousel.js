import React from 'react';
import Swiper from 'react-native-swiper';
import styled from 'styled-components';
import { Banner } from '../molecules';

const Wrapper = styled.View`
  width: 100%;
  height: 60%;
`;

const BannerCarousel = ({ data }) => {
  return (
    <Wrapper>
      <Swiper loop={true} showsButtons={false} showsPagination={false}>
        {data.map(item => {
          return <Banner key={item.id} {...item} />;
        })}
      </Swiper>
    </Wrapper>
  );
};

BannerCarousel.defaultProps = {
  data: [],
};

export default BannerCarousel;
