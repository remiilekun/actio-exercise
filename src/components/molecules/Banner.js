import React from 'react';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components';
import LiveIcon from '@assets/svg/live.svg';
import ClockIcon from '@assets/svg/clock.svg';
import { msToHMS } from '@lib/utils';
import { Button, Text } from '../atoms';
import { MiniClassItem } from './MiniClassItem';

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
  line-height: 60px;
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

const TimeWrapper = styled.View`
  align-items: center;
  flex-direction: row;
`;

const TimeInfoWrapper = styled.View`
  justify-content: center;
`;

export const Banner = ({ tag, name, image, date, tutor }) => {
  const isLive = date && Date.now() >= date.getTime();

  const renderTopSection = () => {
    if (!date) {
      return (
        <TagWrapper>
          <Text fontWeight="bold">{tag}</Text>
        </TagWrapper>
      );
    } else if (isLive) {
      return (
        <Button variant="transparent">
          <LiveIcon width={50} height={40} style={{ marginRight: 10 }} />
          <Text fontWeight="bold">LIVE</Text>
        </Button>
      );
    } else {
      const milliseconds = date.getTime() - Date.now();
      return (
        <Button variant="transparent" style={{ paddingHorizontal: 15 }}>
          <TimeWrapper>
            <ClockIcon width={20} height={20} style={{ marginRight: 10 }} />
            <TimeInfoWrapper>
              <Text fontSize="xs" fontWeight="bold">
                Starting in
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="lemon">
                {msToHMS(milliseconds)}
              </Text>
            </TimeInfoWrapper>
          </TimeWrapper>
        </Button>
      );
    }
  };

  const renderButton = () => {
    if (!date) {
      return <Button>TAKE A LOOK</Button>;
    } else if (isLive) {
      return <Button>JOIN SESSION</Button>;
    } else {
      return (
        <Button variant="transparent">
          <MiniClassItem image={image} date={date} tutor={tutor} />
        </Button>
      );
    }
  };

  return (
    <Wrapper>
      <Image source={image} />
      <Content>
        <TagWrapper>{renderTopSection()}</TagWrapper>
        <TitleWrapper>
          <Title>{name.replace(' ', '\n')}</Title>
        </TitleWrapper>

        {renderButton()}
      </Content>
    </Wrapper>
  );
};

Banner.defaultProps = {
  tag: 'Most Popular:',
};
