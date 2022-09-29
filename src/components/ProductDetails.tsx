import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import {styles} from '../styles';
import {product} from '../mock/mock';
const ProductDetails = () => {
  const [rating, setRating] = useState('4.3');

  return (
    <View style={styles.viewProductDetails}>
      <Text style={styles.productText}>{product.name}</Text>
      <View style={styles.priceDetails}>
        <View style={styles.priceTextView}>
          <Text style={styles.priceText}>{product.discountPrice + ' SAR'}</Text>
          <Text style={styles.oldPriceText}>{product.price + ' SAR'}</Text>
        </View>
        <View style={styles.ratingDetails}>
          <Rating
            type="custom"
            ratingBackgroundColor="#c8c7c8"
            ratingCount={5}
            imageSize={18}
            style={styles.rating}
            fractions={true}
            onStartRating={setRating}
            onFinishRating={setRating}
          />
          <Text style={styles.ratingText}>{rating} out of 5</Text>
        </View>
      </View>
      <View style={styles.textDetails}>
        <Text style={styles.textDetailsBody}>{product.details}</Text>
      </View>
      <View style={styles.textDetailsView}>
        <View style={styles.textDetails}>
          <Text style={styles.textDetailsTitles}>Details</Text>
        </View>
        <View style={styles.textDetails}>
          <Text style={styles.textDetailsBody}>Brand</Text>
          <Text style={styles.textDetailsBody}>{product.brand}</Text>
        </View>
        <View style={styles.textDetails}>
          <Text style={styles.textDetailsBody}>Size</Text>
          <Text style={styles.textDetailsBody}>{product.size}</Text>
        </View>
        <View style={styles.textDetails}>
          <Text style={styles.textDetailsBody}>SKU</Text>
          <Text style={styles.textDetailsBody}>{product.SKU}</Text>
        </View>
        <View style={styles.textDetails}>
          <Text style={styles.textDetailsTitles}>Specfications</Text>
        </View>
        <View style={styles.textDetails}>
          <Text style={styles.textDetailsBody}>Weight</Text>
          <Text style={styles.textDetailsBody}>{product.weight}</Text>
        </View>
        <View style={styles.textDetails}>
          <Text style={styles.textDetailsBody}>Color</Text>
          <Text style={styles.textDetailsBody}>{product.color}</Text>
        </View>
        <View style={styles.textDetails}>
          <Text style={styles.textDetailsBody}>Warranty</Text>
          <Text style={styles.textDetailsBody}>{product.warranty}</Text>
        </View>
        <View style={styles.textDetails}>
          <Text style={styles.textDetailsTitles}>Customization</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
