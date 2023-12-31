import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";
import { FontSize, Color, Border, FontFamily } from "../Styles/StylesOn";
import { useNavigation } from '@react-navigation/native';

const OnboardingFlow = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.onboardingFlow}>
      <Image
        style={[styles.onboardingFlowIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assetsOn/onboarding-flow.png")}
      />
      <Image
        style={[styles.image1Icon, styles.image1IconLayout]}
        contentFit="cover"
        source={require("../assetsOn/image-1.png")}
      />
      <Image
        style={[styles.onboardingFlowChild, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assetsOn/arrow-1.png")}
      />
      <Text style={[styles.welcomeToStudysync, styles.doneFlexBox]}>
        Welcome to StudySync, Never forget your educational tasks now.
      </Text>
      <Text style={[styles.step1SignContainer, styles.containerFlexBox1]}>
        <Text style={styles.step1SignContainer1}>
          <Text style={styles.doneTypo}>Step 1</Text>
          <Text style={styles.signUp}>: Sign Up</Text>
        </Text>
      </Text>
      <Image
        style={[styles.image2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assetsOn/image-2.png")}
      />
      <Text style={[styles.step2LoginContainer, styles.containerFlexBox1]}>
        {/* <Text style={styles.step1SignContainer1}> */}
          <Text style={styles.doneTypo}>{`Step 2: `}</Text>
          <Text style={styles.signUp}>Login with your credentials.</Text>
        {/* </Text> */}
      </Text>
      <Image
        style={[styles.onboardingFlowItem, styles.image4IconPosition]}
        contentFit="cover"
        source={require("../assetsOn/arrow-2.png")}
      />
      <Image
        style={[styles.image3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assetsOn/image-3.png")}
      />
      <Text style={[styles.step3YouContainer, styles.containerFlexBox]}>
        <Text style={styles.step1SignContainer1}>
          <Text style={styles.doneTypo}>Step 3</Text>
          <Text style={styles.signUp}>
            : Homescreen will appear.
          </Text>
        </Text>
      </Text>
      <Image
        style={[styles.onboardingFlowInner, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assetsOn/arrow-3.png")}
      />
      <Image
        style={[styles.image4Icon, styles.image4IconPosition]}
        contentFit="cover"
        source={require("../assetsOn/image-4.png")}
      />
      <Text style={[styles.step4CreateContainer, styles.containerFlexBox1]}>
        <Text style={styles.step1SignContainer1}>
          <Text style={styles.doneTypo}>Step 4</Text>
          <Text style={styles.signUp}>: Create Task</Text>
        </Text>
      </Text>
      <Image
        style={[styles.image5Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assetsOn/image-5.png")}
      />
      <Image
        style={[styles.arrowIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assetsOn/arrow-4.png")}
      />
      <Text style={[styles.step5GetContainer, styles.containerFlexBox]}>
        <Text style={styles.step1SignContainer1}>
          <Text style={styles.doneTypo}>Step 5</Text>
          <Text style={styles.signUp}>: Get Notified!</Text>
        </Text>
      </Text>
      
        <LinearGradient
        style={[styles.rectangleLineargradient, styles.image1IconLayout2]}
        locations={[0, 1]}
        colors={["#9c2cf3", "#3a49f9"]}
      />
       <TouchableOpacity style={{...styles.done, ...styles.doneTypo}} onPress={() => navigation.navigate('SignUpScreen')}>
      <Text > Done </Text>
      </TouchableOpacity> 

    </View>
  );
};

const styles = StyleSheet.create({

  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  image1IconLayout: {
    borderRadius: 18,
    position: "absolute",
  },
  image1IconLayout2: {
    borderRadius: 18,
    position: "absolute",
    justifyContent: "center",
    textAlign: "center",
  },
  doneFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  containerFlexBox1: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_base,
    width: "19.9%",
  },
  image4IconPosition: {
    top: "37.91%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  containerFlexBox: {
    width: "36.57%",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    position: "absolute",
  },
  doneTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  onboardingFlowIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
  },
  image1Icon: {
    height: "16.36%",
    top: "17.18%",
    bottom: "66.46%",
    left: "14.18%",
    right: "65.92%",
    width: "19.9%",
    borderRadius: 18,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  onboardingFlowChild: {
    height: "1.96%",
    width: "14.18%",
    top: "26.38%",
    right: "40.55%",
    bottom: "71.66%",
    left: "45.27%",
  },
  welcomeToStudysync: {
    height: "6.5%",
    width: "86.57%",
    top: "5%",
    left: "7.21%",
    fontWeight: "100",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  signUp: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  step1SignContainer1: {
    width: "100%",
  },
  step1SignContainer: {
    top: "12.15%",
    left: "10.2%",
    width: "41.79%",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    height: "5.03%",
  },
  image2Icon: {
    height: "16.39%",
    top: "21.51%",
    bottom: "64.1%",
    left: "68.91%",
    right: "11.19%",
    borderRadius: Border.br_base,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  step2LoginContainer: {
    height: "5.44%",
    width: "38.81%",
    top: "14.23%",
    left: "58.96%",
  },
  onboardingFlowItem: {
    height: "6.26%",
    width: "2.99%",
    right: "18.16%",
    bottom: "55.83%",
    left: "78.86%",
  },
  image3Icon: {
    height: "18.73%",
    top: "46.38%",
    bottom: "34.89%",
    left: "68.91%",
    right: "11.19%",
    borderRadius: Border.br_base,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  step3YouContainer: {
    height: "6.13%",
    top: "68.1%",
    left: "63.43%",
  },
  onboardingFlowInner: {
    height: "0.86%",
    width: "14.93%",
    top: "50.55%",
    right: "41.04%",
    bottom: "48.59%",
    left: "44.03%",
  },
  image4Icon: {
    height: "18.94%",
    bottom: "43.15%",
    borderRadius: Border.br_base,
    width: "19.9%",
    left: "14.18%",
    right: "65.92%",
  },
  step4CreateContainer: {
    height: "5.52%",
    top: "58.28%",
    left: "5.97%",
    width: "41.79%",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  image5Icon: {
    height: "21.22%",
    top: "69.2%",
    right: "48.51%",
    bottom: "9.57%",
    left: "31.59%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  arrowIcon: {
    width: "9.2%",
    top: "64.17%",
    right: "73.13%",
    bottom: "30.8%",
    left: "17.66%",
    height: "5.03%",
  },
  step5GetContainer: {
    height: "6.99%",
    top: "84.54%",
    left: "55.47%",
  },
  rectangleLineargradient: {
    height: "4.17%",
    width: "21.39%",
    top: "92.52%",
    right: "38.81%",
    bottom: "3.31%",
    left: "39.8%",
    backgroundColor: "transparent",
  },
  done: {
    height: "2.45%",
    width: "19.15%",
    top: "93.37%",
    left: "40.8%",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
    position: "absolute",
    fontWeight: "700",
    
  },
  onboardingFlow: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});

export default OnboardingFlow;
