import React, {useState} from 'react';
import {PaperSelect} from 'react-native-paper-select';
import {styles} from '../styles';

const SelectFeild = () => {
  const [colors, setColors] = useState({
    value: '',
    list: [
      {_id: '1', value: 'Red'},
      {_id: '2', value: 'Green'},
      {_id: '3', value: 'Blue'},
      {_id: '4', value: 'Pink'},
    ],
    selectedList: [],
    error: '',
  });
  return (
    <PaperSelect
      containerStyle={styles.selectContainerStyle}
      dialogButtonLabelStyle={styles.dialogButtonLabelStyle}
      checkboxColor={'#73548F'}
      label="Select Color"
      underlineColor="transparent"
      value={colors.value}
      onSelection={(value: any) => {
        setColors({
          ...colors,
          value: value.text,
          selectedList: value.selectedList,
          error: '',
        });
      }}
      arrayList={[...colors.list]}
      selectedArrayList={colors.selectedList}
      errorText={colors.error}
      multiEnable={false}
      textInputMode="flat"
      hideSearchBox
      modalCloseButtonText="Close"
      modalDoneButtonText="Save"
    />
  );
};

export default SelectFeild;
