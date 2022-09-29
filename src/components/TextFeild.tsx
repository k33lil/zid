import React from 'react';
import {TextInput} from 'react-native-paper';
import {styles} from '../styles';

const TextFeild = () => {
  return (
    <TextInput
      style={styles.textInputStyle}
      label="Recipient Name"
      activeUnderlineColor="#73548F"
      underlineColor="transparent"
    />
  );
};

export default TextFeild;
