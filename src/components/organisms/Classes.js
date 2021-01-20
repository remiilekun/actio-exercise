import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../atoms';
import { EmptyClassState, ClassItem } from '../molecules';

const Wrapper = styled.View`
  padding: 20px 30px;
  flex: 1;
`;

const Separator = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  height: 1px;
  opacity: 0.2;
  width: 100%;
`;

export const Classes = ({ data }) => {
  const renderItems = () => {
    return (
      <>
        <Text fontSize="xl" fontWeight="bold">
          Upcoming
        </Text>
        <FlatList
          data={data}
          ItemSeparatorComponent={Separator}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ClassItem {...item} />}
          showsVerticalScrollIndicator={false}
        />
      </>
    );
  };

  return (
    <Wrapper>{!data.length ? <EmptyClassState /> : renderItems(data)}</Wrapper>
  );
};

Classes.defaultProps = {
  data: [],
};
