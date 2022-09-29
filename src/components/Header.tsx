import React from 'react';
import Animated, {interpolateNode, Extrapolate} from 'react-native-reanimated';
import {styles} from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AnimatedHeader = ({animatedValue}: {animatedValue: any}) => {
  const Header_Maximum_Height = 80;
  const Header_Minimum_Height = 60;
  const Font_Maximum_Size = 28;
  const Font_Minimum_Size = 22;

  const headerHeight = interpolateNode(animatedValue, {
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: [Header_Maximum_Height, Header_Minimum_Height],
    extrapolate: Extrapolate.CLAMP,
  });

  const fontSize = interpolateNode(animatedValue, {
    inputRange: [0, Font_Maximum_Size - Font_Minimum_Size],
    outputRange: [Font_Maximum_Size, Font_Minimum_Size],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: headerHeight,
        },
      ]}>
      <Animated.Text
        style={[
          styles.headerText,
          {
            fontSize: fontSize,
          },
        ]}>
        Store Name
      </Animated.Text>
      <Icon
        name={'orbit'}
        style={styles.headerIcon}
        size={20}
        color={'#522973'}
      />
    </Animated.View>
  );
};

export default AnimatedHeader;
