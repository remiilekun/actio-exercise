import React from 'react';
import styled from 'styled-components/native';
import { EmptyClassState } from '../molecules';

const Wrapper = styled.View`
  padding: 40px 30px;
`;

export const Classes = ({ data }) => {
  return <Wrapper>{!data.length ? <EmptyClassState /> : null}</Wrapper>;
};

Classes.defaultProps = {
  data: [],
};
