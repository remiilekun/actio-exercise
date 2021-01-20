import React from 'react';
import styled from 'styled-components';
import { Button, Text } from '../atoms';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.cyan['100']};
  height: 100%;
  width: 100%;
`;

const Content = styled.View`
  padding: 20px 30px;
  flex: 1;
`;

const TitleWrapper = styled.View`
  margin-bottom: 30px;
  margin-top: auto;
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
          <Text fontFamily="redRock" fontSize="6xl">
            {name.replace(' ', '\n')}
          </Text>
        </TitleWrapper>

        <Button>TAKE A LOOK</Button>
      </Content>
    </Wrapper>
  );
};

Banner.defaultProps = {
  tag: 'Most Popular:',
};
