import React from 'react';
import styled from 'styled-components/native';
import { verticalScale } from 'react-native-size-matters';
import format from 'date-fns/format';
import ChevronRightIcon from '@assets/svg/chevron-right.svg';
import { Text } from '../atoms';

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
`;

const ImageWrapper = styled.View`
  border-radius: 500px;
  background-color: ${({ theme }) => theme.colors.purple['200']};
  height: ${verticalScale(25)}px;
  margin-right: 11.5px;
  width: ${verticalScale(25)}px;
  overflow: hidden;
`;

const CoverImage = styled.Image`
  height: ${verticalScale(25)}px;
  width: ${verticalScale(25)}px;
`;

const ClassInfo = styled.View`
  flex-direction: column;
  margin-right: 30px;
`;

const TimeInfo = styled.View`
  flex-direction: row;
`;

const ChevronWrapper = styled.View`
  margin-left: auto;
`;

export const MiniClassItem = ({ image, date, tutor }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <CoverImage source={image} />
      </ImageWrapper>

      <ClassInfo>
        <TimeInfo>
          <Text fontSize="xs">{format(date, 'eeeeee dd.mm.yyyy  hh:mm')}</Text>
        </TimeInfo>
        <Text fontWeight="bold">
          <Text fontSize="xs" fontWeight="normal">
            with
          </Text>{' '}
          {tutor}
        </Text>
      </ClassInfo>

      <ChevronWrapper>
        <ChevronRightIcon height={11} width={7} />
      </ChevronWrapper>
    </Wrapper>
  );
};
