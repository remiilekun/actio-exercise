import React from 'react';
import { Text as RNText } from 'react-native';
import styled from 'styled-components/native';
import { pluckDeep } from '@lib/utils';

const formatFontName = ({
  theme,
  fontWeight = 'normal',
  fontFamily = 'openSans',
}) => {
  return `${theme.font.family[fontFamily]}-${theme.font.weight[fontWeight]}`;
};

export const Text = styled(props => (
  <RNText {...props} allowFontScaling={false} />
))`
  color: ${({ theme, color = 'white' }) =>
    pluckDeep(color)(theme.colors) || color};
  font-family: ${formatFontName};
  font-size: ${({ theme, fontSize = '16px' }) =>
    theme.font.size[fontSize] || fontSize};
  text-align: ${({ theme, textAlign = 'left' }) => theme.font.align[textAlign]};
`;
