import React from 'react';
import styled from 'styled-components/native';
import { verticalScale } from 'react-native-size-matters';
import format from 'date-fns/format';
import ClockIcon from '@assets/svg/clock.svg';
import ChevronRightIcon from '@assets/svg/chevron-right.svg';
import { Text } from '../atoms';

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 12px 0;
`;

const ImageWrapper = styled.View`
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.purple['200']};
  height: ${verticalScale(48)}px;
  margin-right: 11.5px;
  width: ${verticalScale(48)}px;
  overflow: hidden;
`;

const CoverImage = styled.Image`
  border-radius: 5px;
  height: ${verticalScale(48)}px;
  width: ${verticalScale(48)}px;
`;

const ClassInfo = styled.View`
  flex-direction: column;
`;

const TimeInfo = styled.View`
  flex-direction: row;
`;

const ChevronWrapper = styled.View`
  margin-left: auto;
`;

export const ClassItem = ({ image, date, name }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <CoverImage source={image} />
      </ImageWrapper>

      <ClassInfo>
        <TimeInfo>
          <Text fontSize="xs">
            {format(date, 'eeeeee dd.mm.yyyy     hh:mm')}
          </Text>
        </TimeInfo>
        <Text fontWeight="bold" style={{ marginBottom: 2 }}>
          {name}
        </Text>
        <Text fontSize="xxs" fontWeight="bold">
          <ClockIcon width={10} height={10} /> SCHEDULED
        </Text>
      </ClassInfo>

      <ChevronWrapper>
        <ChevronRightIcon height={11} width={7} />
      </ChevronWrapper>
    </Wrapper>
  );
};
