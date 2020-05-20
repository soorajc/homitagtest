/**
 * Homitag Test React Native
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import Styles from './Styles';

const TextInputField = props => {
  const [inputValue, setInputValue] = useState('');
  const [validInputFlag, setValidInputFlag] = useState(true);

  const handleTextChange = input => {
    setInputValue(input);
    if (props.validationExpression.test(input)) {
      setValidInputFlag(true);
    } else {
      setValidInputFlag(false);
    }
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.label}>{props.label}</Text>
      <TextInput
        style={[
          Styles.textInput,
          {borderColor: validInputFlag ? 'white' : 'red'},
        ]}
        onChangeText={text => handleTextChange(text)}
        placeholder={props.placeholder}
        placeholderTextColor="white"
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
      />
    </View>
  );
};

export default TextInputField;

TextInputField.propTypes = {
  label: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
};
