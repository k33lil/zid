import React, {useRef} from 'react';
import {Image, View} from 'react-native';
import Animated from 'react-native-reanimated';
import AnimatedHeader from '../components/Header';
import LikeButton from '../components/LikeButton';
import ProductDetails from '../components/ProductDetails';
import SelectFeild from '../components/SelectFeild';
import ShareButton from '../components/ShareButton';
import {styles} from '../styles';
import TextFeild from '../components/TextFeild';
import FooterButton from '../components/FooterButton';

const ProductLayout = () => {
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.viewProductLayout}>
      <AnimatedHeader animatedValue={offset} />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: offset}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/product1.jpeg')}
            style={styles.image}
          />
        </View>
        <View style={styles.viewShare}>
          <LikeButton />
          <ShareButton />
        </View>
        <ProductDetails />
        <TextFeild />
        <SelectFeild />
      </Animated.ScrollView>
      <FooterButton />
    </View>
  );
};

export default ProductLayout;
