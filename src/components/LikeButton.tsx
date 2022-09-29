import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles';

const LikeButton = () => {
  const liked = useSharedValue(0);

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: liked.value,
        },
      ],
      opacity: liked.value,
    };
  });
  return (
    <View style={styles.viewLikeBackground}>
      <Pressable
        onPress={() => (liked.value = withSpring(liked.value ? 0 : 1))}>
        <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
          <Icon name={'heart-outline'} size={22} color={'#D1D1D1'} />
        </Animated.View>

        <Animated.View style={fillStyle}>
          <Icon name={'heart'} size={22} color={'red'} />
        </Animated.View>
      </Pressable>
      <Text style={styles.likeText}>125</Text>
    </View>
  );
};

export default LikeButton;
