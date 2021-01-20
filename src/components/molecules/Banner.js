import React from 'react';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components';
import { Button, Text } from '../atoms';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.cyan['100']};
  height: 100%;
  width: 100%;
`;

const Content = styled.View`
  flex: 1;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

const TitleWrapper = styled.View`
  margin-bottom: 30px;
  margin-top: auto;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${Platform.OS === 'ios' ? 'RedRock' : 'RedRock-Regular'};
  font-size: ${({ theme }) => theme.font.size['6xl']};
`;

const TagWrapper = styled.View`
  margin-bottom: 10px;
`;

const Image = styled.Image`
  bottom: -70px;
  height: 100%;
  position: absolute;
  right: -50px;
  width: 60%;
`;

export const Banner = ({ tag, name, image }) => {
  return (
    <Wrapper>
      <Image source={image} />
      <Content>
        <TagWrapper>
          <Text fontWeight="bold">{tag}</Text>
        </TagWrapper>

        <TitleWrapper>
          <Title>{name.replace(' ', '\n')}</Title>
        </TitleWrapper>

        <Button>TAKE A LOOK</Button>
      </Content>
    </Wrapper>
  );
};

Banner.defaultProps = {
  tag: 'Most Popular:',
};
