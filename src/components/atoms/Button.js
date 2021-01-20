import React from 'react';
import { StyleSheet, TouchableOpacity, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from './Text';

export const Button = ({ children, variant, style, ...props }) => {
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.9];
  const scale = animation.interpolate({ inputRange, outputRange });

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const renderChildren = () => (
    <Text fontSize="sm" fontWeight="bold">
      {children}
    </Text>
  );

  const buttonProps = { onPressIn, onPressOut, activeOpacity: 0.8 };

  switch (variant) {
    case 'outline':
      return (
        <TouchableOpacity
          style={[styles.outlineButton, { transform: [{ scale }] }, style]}
          {...buttonProps}
          {...props}
        >
          {renderChildren()}
        </TouchableOpacity>
      );

    case 'transparent':
      return (
        <TouchableOpacity
          style={[styles.transparentButton, { transform: [{ scale }] }, style]}
          {...buttonProps}
          {...props}
        >
          {children}
        </TouchableOpacity>
      );

    default:
      return (
        <TouchableOpacity
          style={{ transform: [{ scale }] }}
          {...buttonProps}
          {...props}
        >
          <LinearGradient
            colors={['#FF5D95', '#D8306B']}
            style={[styles.gradientButton, style]}
          >
            {renderChildren()}
          </LinearGradient>
        </TouchableOpacity>
      );
  }
};

const buttonStyles = {
  alignItems: 'center',
  borderRadius: 500,
  justifyContent: 'center',
  paddingHorizontal: 10,
  paddingVertical: 10,
};

var styles = StyleSheet.create({
  gradientButton: {
    ...buttonStyles,
    shadowColor: '#00000029',
    shadowOffset: { height: 3, width: 0 },
    paddingVertical: 14,
    shadowRadius: 6,
    width: '100%',
  },
  outlineButton: {
    ...buttonStyles,
    borderColor: '#EF4B84',
    borderWidth: 2,
    shadowColor: '#7C1C3D',
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 6,
    width: '100%',
  },
  transparentButton: {
    ...buttonStyles,
    alignSelf: 'flex-start',
    backgroundColor: '#222222CC',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 5,
  },
});

Button.defaultProps = {
  variant: 'solid',
};
