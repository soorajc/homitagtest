/**
 * Homitag Test React Native
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Styles from './Styles';
import CardWithLogo from '../../ui_components/CardWithLogo';
import FooterText from '../../ui_components/FooterText';
import TextInputField from '../../ui_components/TextInputField';
import Button from '../../ui_components/Button';
import CheckBoxWithText from '../../ui_components/CheckBoxWithText';
import {emailPattern, passwordPattern} from '../../constants';

const SignUpScreen = props => {
  return (
    <SafeAreaView style={Styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={Styles.scrollView}>
        <CardWithLogo
          title="REGISTER"
          description="You and your friends always connected"
        />
        <View style={Styles.formContainer}>
          <TextInputField
            label="Email:"
            keyboardType="email-address"
            placeholder="Enter your email address"
            validationExpression={emailPattern}
          />
          <TextInputField
            label="Password"
            placeholder="Enter your password"
            validationExpression={passwordPattern}
            secureTextEntry
          />
          <TextInputField
            label="Confirm Password"
            placeholder="Confirm your password"
            validationExpression={passwordPattern}
            secureTextEntry
          />
          <CheckBoxWithText label="I agree with the terms and conditions and the privacy policy" />
        </View>
        <View style={Styles.footerView}>
          <Button label="Sign Up" />
          <FooterText
            title="Already have an account?"
            highlightedLabel="Login"
            onPressHandler={() => props.navigation.goBack()}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
