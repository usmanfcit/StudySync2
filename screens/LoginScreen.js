import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from './Screen_Styles/LoginStyle';
import { useNavigation } from '@react-navigation/native';
import {FIREBASE_AUTH} from '../FireBaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
//import response from "express/lib/response";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try{
      const response = await signInWithEmailAndPassword(auth, email, password);
      //console.log(response);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      alert('SignIn Failed' + error.message);
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
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>

      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={[styles.signUp, styles.loginTypo]}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={[styles.enterEmailId, styles.enterEmailIdTypo]}>
        Email
      </Text>
      <Text style={[styles.createPassward, styles.enterEmailIdTypo]}>
        Password
      </Text>
      <View style={styles.signUpScreenItem} />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
      <Text style={{...styles.ForgotPassword, ...styles.enterEmailIdTypo, textAlign: "center", fontSize: 12}}>
        Forgot Password?
      </Text>
      </TouchableOpacity>
      
      
      <TextInput secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}  // Password
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


          {/* <TouchableOpacity onPress={signIn}>
            <Text style={[styles.signUp1, styles.signUp1Clr]}>Login</Text>
          </TouchableOpacity> */}

        {loading ? (
          <ActivityIndicator size='large' color="#0000ff" />
        ) : (
          <>
              <TouchableOpacity onPress={signIn}> 
                <Text style={[styles.signUp1, styles.signUp1Clr]}>Login</Text>
              </TouchableOpacity>
          </>
        )}


      </View>
      <Text style={[styles.heyJoinNowContainer, styles.signUp1Clr]}>
        <Text style={styles.heyJoinNowContainer1}>
          <Text style={styles.hey}>{`Hey!
`}</Text>
          <Text style={styles.joinNow}>Welcome Back</Text>
        </Text>
      </Text>
    </LinearGradient>
  );
};



export default LoginScreen;
