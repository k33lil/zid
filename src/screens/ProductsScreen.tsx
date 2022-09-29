import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductLayout from '../layouts/ProductLayout';
import {styles} from '../styles';

const ProductsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductLayout />
    </SafeAreaView>
  );
};

export default ProductsScreen;
