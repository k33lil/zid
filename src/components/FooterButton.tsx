import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {styles} from '../styles';

const FooterButton = () => {
  const [count, setCount] = useState(5);

  return (
    <View style={styles.footer}>
      <View style={styles.footerBottonAddView}>
        <Button
          color="#73548F"
          mode="text"
          uppercase={false}
          style={styles.footerBottonAdd}
          onPress={() => setCount(count + 1)}>
          <Text style={styles.footerBottonAddText}>+</Text>
        </Button>
        <Text style={styles.footerBottonAddText}>{count}</Text>
        <Button
          color="#73548F"
          mode="text"
          uppercase={false}
          style={styles.footerBottonAdd}
          onPress={() => setCount(count - 1)}>
          <Text style={styles.footerBottonAddText}>-</Text>
        </Button>
      </View>
      <View style={styles.footerBottonView}>
        <Button
          color="#73548F"
          mode="contained"
          uppercase={false}
          style={styles.footerBotton}
          onPress={() => console.log('Pressed')}>
          <Text style={styles.footerBottonText}>Buy Now</Text>
        </Button>
      </View>
    </View>
  );
};

export default FooterButton;
