import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Button, Text } from '../atoms';

const TextWrapper = styled.View`
  margin-bottom: 25px;
`;

export const EmptyClassState = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <TextWrapper>
        <Text textAlign="center">
          Here you will be able to see all sessions ahead. Find the perfect
          course in the catalogue.
        </Text>
      </TextWrapper>

      <Button onPress={() => navigate('HomeWithClasses')} variant="outline">
        EXPLORE COURSES
      </Button>
    </>
  );
};
