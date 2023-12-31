import React, {useState, useEffect} from "react";
import { View, Text, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import styles from './Screen_Styles/ProfileEditStyle';
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import {FIREBASE_REALTIME_DB} from '../FireBaseConfig';
import {FIREBASE_AUTH} from '../FireBaseConfig';

const firebase = FIREBASE_REALTIME_DB;
const auth = FIREBASE_AUTH;

const ProfileEdit = () => {

  const [username, setUsername] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [email, setEmail] = useState('');
  

  // useEffect(() => {
  //   // Fetch user data from Firebase Authentication
  //   const user = firebase.auth().currentUser;
  //   if (user) {
  //     setEmail(user.email);
  //     // Password is not directly accessible due to security reasons
  //   }

  //   // Fetch additional user data from Realtime Database
  //   const fetchUserData = async () => {
  //     try {
  //       const userDataSnapshot = await firebase.database().ref(`users/${user.uid}`).once('value');
  //       const userData = userDataSnapshot.val();
  //       if (userData) {
  //         setUsername(userData.username || '');
  //         setPhoneNumber(userData.phoneNumber || '');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  const handleUpdate = async () => {
    try {
      // Update user data in Realtime Database
      const user = auth.currentUser;
      if (user) {
        await firebase.database().ref(`users/${user.uid}`).update({
          username,
          //phoneNumber,
          // Add other fields as needed
        });
      }
    } catch (error) {
      console.error('Error updating user data:', error);
      // Handle the error appropriately, e.g., show an error message to the user
    }
  };
  




  const navigation = useNavigation();

  return (
    <View style={styles.profileEdit}>
      <LinearGradient
        style={styles.profileEditChild}
        locations={[0, 1]}
        colors={["#9c2cf3", "#3a49f9"]}
      />
        {/* // Username */}
      <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={[styles.profileEditItem, styles.rectangleLayout]}
          />

      <View style={[styles.profileEditInner, styles.rectangleLayout]} />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />

      {/* <View style={[styles.profileEditChild1, styles.rectangleLayout]} /> */}

      <Text style={[styles.username, styles.phoneTypo]}>Username</Text>


      <Text style={[styles.editProfile, styles.updateTypo]}>Edit Profile</Text>
      <Text style={[styles.phoneNumber, styles.phoneTypo]}>Phone Number</Text>

      <Text style={[styles.emailId, styles.phoneTypo]}>Email I’d</Text>
      
      <Text style={[styles.phoneNumber1, styles.phoneTypo]}>Phone Number</Text>


      {/* <Text style={[styles.password, styles.phoneTypo]}>Password</Text> */}


      <LinearGradient
        style={[styles.rectangleLineargradient, styles.rectangleLayout]}
        locations={[0, 1]}
        colors={["rgba(156, 44, 243, 0.9)", "rgba(58, 73, 249, 0.9)"]}
      />

      {/* <Text style={[styles.update, styles.updateTypo]}>Update</Text> */}
      <TouchableOpacity onPress={handleUpdate}>
        <Text style={[styles.update, styles.updateTypo]}>Update</Text>
      </TouchableOpacity>
      <Text style={[styles.usman, styles.textTypo]}> Usman </Text>

      {/* <Text style={[styles.changePicture, styles.textTypo]}> */}
        
      {/* </Text> */}
      <Text style={[styles.usmangmailcom, styles.textTypo]}>
        usman@gmail.com
      </Text>
      <Text style={[styles.text, styles.textTypo]}>+92300495221</Text>

      {/* <Text style={[styles.text1, styles.textTypo]}>12345</Text> */}

    <TouchableOpacity
      onPress={() => navigation.navigate('Home')}
    >
      <Image
        style={styles.arrowLeftIcon}
        contentFit="cover"
        source={require("../assets/arrow--short-left.png")}
      />
    </TouchableOpacity>

    {/* <TouchableOpacity
      style={styles.notificationsTabChild}
      onPress={() => navigation.navigate('Home')}
    >
      <Text >Home</Text>
    </TouchableOpacity> */}
      
    </View>
  );
};



export default ProfileEdit;
