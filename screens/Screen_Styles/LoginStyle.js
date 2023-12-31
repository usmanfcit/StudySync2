import { Color, FontSize, FontFamily, Border } from "../../Styles/LoginSignupStyles";
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    loginTypo: {
      height: 41,
      alignItems: "center",
      display: "flex",
      color: Color.colorMediumblue,
      fontSize: FontSize.FSize,
      top: 315,
      width: "30%",
      justifyContent: "center",
      textAlign: "center",
      fontFamily: FontFamily.poppinsSemiBold,
      fontWeight: 'normal',
      position: "absolute",
    },
    enterEmailIdTypo: {
      fontFamily: FontFamily.poppinsMedium,
      fontWeight: 'normal',
      left: 51,
      textAlign: "left",
      height: 41,
      alignItems: "center",
      display: "flex",
      color: Color.colorMediumblue,
      fontSize: FontSize.FSize,
      position: "absolute",
    },
    
    rectangleViewLayout: {
      height: 56,
      width: 309,
      borderWidth: 2,
      borderRadius: 26,
      left: 30,
      borderColor: Color.colorMediumblue,
      position: "absolute",
      padding: 15
    },
    signUp1Position: {
      top: 0,
      height: 55,
    },
    signUpScreenChild: {
      top: 300,
      borderTopLeftRadius: Border.borderRound,
      borderTopRightRadius: Border.borderRound,
      backgroundColor: "#f6f2f1",
      width: "100%",
      height: "100%",
      position: "absolute",
    },
    login: {
      left: 35,
    },
    signUp: {
      left: 211,
    },
    enterEmailId: {
      top: 379,
      width: 136,
      textAlign: "left",
    },
    createPassward: {
      top: 485,
      width: 174,
      textAlign: "left",
    },
    ForgotPassword: {
      top: 610,
      width: 299,
      textAlign: "center",
      //position: 'relative',
    },
    signUpScreenItem: {
      top: 355,
      left: 59,
      borderTopWidth: 1.8,
      width: 79,
      height: 2,
      borderColor: Color.colorMediumblue,
      borderStyle: "solid",
      position: "absolute",
    },
    CreatePass: {  
      top: 529,
     backgroundColor: "white",
    },
    EnterMail: {  
      top: 425,
      backgroundColor: "white",
    },
    loginButtonChild: {
      left: 0,
      borderRadius: 18,
      width: 240,
      top: 0,
      position: "absolute",
      backgroundColor: "transparent",
    },
    signUp1: {
      left: 58,
      fontSize: 26,
      fontWeight: "700",
      fontFamily: FontFamily.poppinsBold,
      top: 8,
      height: 55,
      width: 123,
      justifyContent: "center",
      textAlign: "center",
      color: Color.colorWhite,
    },
    loginButton: {
      top: 680,
      left: 65,
      height: 55,
      width: 240,
      position: "absolute",
    },
    hey: {
      fontSize: 39,
    },
    joinNow: {
      fontSize: 31,
    },
    heyJoinNowContainer1: {
      width: "100%",
    },
    heyJoinNowContainer: {
      top: 179,
      left: 40,
      width: 299,
      height: 100,
      textAlign: "left",
      color: Color.colorWhite,
      fontFamily: FontFamily.poppinsSemiBold,
      fontWeight: "600",
    },
    signUpScreen: {
      flex: 1,
      height: "100%",
      width: "100%",
    },
  });

  export default styles;