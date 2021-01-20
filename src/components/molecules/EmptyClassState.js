import React from 'react';
import styled from 'styled-components/native';
import { Button, Text } from '../atoms';

const TextWrapper = styled.View`
  margin-bottom: 25px;
`;

export const EmptyClassState = () => {
  return (
    <>
      <TextWrapper>
        <Text textAlign="center">
          Here you will be able to see all sessions ahead. Find the perfect
          course in the catalogue.
        </Text>
      </TextWrapper>

      <Button solid={false}>EXPLORE COURSES</Button>
    </>
  );
};
