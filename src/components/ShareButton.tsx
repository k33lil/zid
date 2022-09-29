import React from 'react';
import {Pressable, Share, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles';

const ShareButton = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Thank you for Sharing Our Product!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {}
  };
  return (
    <Pressable style={styles.viewShareBackground} onPress={onShare}>
      <Text style={styles.shareText}>Share</Text>
      <Icon name={'share-variant-outline'} size={18} color={'#522973'} />
    </Pressable>
  );
};

export default ShareButton;
