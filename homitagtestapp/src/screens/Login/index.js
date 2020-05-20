/**
 * Homitag Test React Native
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Styles from './Styles';
import CardWithLogo from '../../ui_components/CardWithLogo';
import FooterText from '../../ui_components/FooterText';
import TextInputField from '../../ui_components/TextInputField';
import Button from '../../ui_components/Button';
import {emailPattern, passwordPattern} from '../../constants';

const LoginScreen = props => {
  return (
    <SafeAreaView style={Styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={Styles.scrollView}>
        <CardWithLogo title="LOG IN !" description="Happy to see you again !" />
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
        </View>
        <View style={Styles.footerView}>
          <Button label="Sign In" />
          <Text style={Styles.forgotPasswordLabel}>Forgot Password ?</Text>
          <FooterText
            title="Don't have account"
            highlightedLabel="Sign up here"
            onPressHandler={() => props.navigation.navigate('SignUp')}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
