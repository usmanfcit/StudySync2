import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from './Screen_Styles/SignUpStyle';
import { useNavigation } from '@react-navigation/native';
import {FIREBASE_AUTH} from '../FireBaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try{
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Succesfully Registered');
    } catch (error) {
      console.log(error);
      alert('Registration Failed!' + error.message);
    } finally {
      setLoading(false);
    }
  }

  const navigation = useNavigation();
  return (
    <LinearGradient
      style={styles.signUpScreen}
      locations={[0, 0.4]}
      colors={["#9c2cf3", "#3a49f9"]}
    >
      <View style={styles.signUpScreenChild} />

      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      </TouchableOpacity>

      <Text style={[styles.signUp, styles.loginTypo]}>Sign Up</Text>
      <Text style={[styles.enterEmailId, styles.enterEmailIdTypo]}>
        Enter email id
      </Text>
      <Text style={[styles.createPassward, styles.enterEmailIdTypo]}>
        Create password
      </Text>
      <View style={styles.signUpScreenItem} />

      <TextInput secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}
        style={[styles.CreatePass, styles.rectangleViewLayout]}
      />

      <TextInput value={email} onChangeText={(text) => setEmail(text)}
       style={[styles.EnterMail, styles.rectangleViewLayout]}
        />

      <View style={styles.loginButton}>
        <LinearGradient
          style={[styles.loginButtonChild, styles.signUp1Position]}
          locations={[0, 1]}
          colors={["#9c2cf3", "#3a49f9"]}
        />

        {/* <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}> 
          <Text style={[styles.signUp1, styles.signUp1Clr]}>Sign Up</Text>
        </TouchableOpacity> */}

        {loading ? (
          <ActivityIndicator size='large' color="#0000ff" />
        ) : (
          <>
              <TouchableOpacity onPress={signUp}> 
                <Text style={[styles.signUp1, styles.signUp1Clr]}>Sign Up</Text>
              </TouchableOpacity>
          </>
        )}

        
        
      </View>
      <Text style={[styles.heyJoinNowContainer, styles.signUp1Clr]}>
        <Text>
          <Text style={styles.hey}>{`Hey!
`}</Text>
          <Text style={styles.joinNow}>Join now</Text>
        </Text>
      </Text>
    </LinearGradient>
  );
};



export default SignUpScreen;
