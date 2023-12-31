import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import {FIREBASE_AUTH} from '../FireBaseConfig';
import { sendPasswordResetEmail } from "firebase/auth";
import { Color, FontSize, FontFamily, Border } from "../Styles/LoginSignupStyles";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const auth = FIREBASE_AUTH;

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Password Reset Email Sent', 'Please check your email to reset your password.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Forgot password?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your registered email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    fontFamily: FontFamily.poppinsMedium,
    fontSize: 24,
    marginBottom: 20,
    color: Color.colorMediumblue,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 10,
    borderColor: Color.colorMediumblue,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ForgotPasswordScreen;
