import * as React from "react";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from './Screen_Styles/HomeStyle';
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      
      <Text style={[styles.text, styles.textFlexBox]}>Welcome to EduSync!</Text>
      <Text style={styles.currentBalance}>Have a nice day.</Text>
      <View style={[styles.card, styles.cardLayout1]}>
        <View style={[styles.card1bgParent, styles.groupChildPosition]}>
          <LinearGradient
            style={styles.card1bg}
            locations={[0, 1]}
            colors={["#9c2cf3", "#3a49f9"]}
          />
          <Text style={[styles.text1, styles.text1Clr]}>OOP Quiz</Text>
        </View>
        <Text style={[styles.currentBalance1, styles.text1Clr]}>
          October 20, 2023
        </Text>
        <View style={styles.group}>
          <View style={[styles.card1bgParent, styles.groupChildPosition]}>
            <Text style={[styles.project1, styles.project1Typo]}>Task 1</Text>
          </View>
        </View>
        
      </View>
      <View style={[styles.cardDisabled, styles.cardLayout1]}>
        <View style={[styles.card1bgParent, styles.groupChildPosition]}>
          <LinearGradient
            style={styles.card1bg}
            locations={[0, 1]}
            colors={["#9c2cf3", "#3a49f9"]}
          />

          <Text style={[styles.text1, styles.text1Clr]}>DSA Assignment</Text>
        </View>
        <Text style={[styles.currentBalance1, styles.text1Clr]}>
          October 24, 2023
        </Text>
        <View style={styles.group}>
          <View style={[styles.card1bgParent, styles.groupChildPosition]}>
            <Text style={[styles.project1, styles.project1Typo]}>Task 2</Text>
          </View>
        </View>
        
      </View>
      <View style={[styles.group4, styles.groupPosition4]}>
        <View style={[styles.rectangleParent, styles.groupPosition3]}>
          <View style={[styles.groupChild, styles.groupChildShadowBox1]} />
          <Text style={[styles.myTasks, styles.tasksTypo]}>My Tasks</Text>
        </View>
      </View>
      
      <View style={[styles.label, styles.groupPosition4]}>
        <View style={[styles.group7, styles.groupPosition2]}>
          <View style={[styles.card1bgParent, styles.groupChildPosition]}>
            <View style={[styles.rectangleView, styles.groupChildShadowBox1]} />
            <Text style={[styles.myTasks1, styles.myTasks1Clr]}>My Tasks</Text>
          </View>
        </View>
        
      </View>
      <Text style={styles.progress}>Progress</Text>

      <View style={[styles.homeItem, styles.homeLayout]} />
      <View style={[styles.homeInner, styles.homeLayout]} />
      <Image
        style={[styles.vectorIcon, styles.iconCardLayout]}
        contentFit="cover"
        source={require("../assetsHome/vector.png")}
      />
      <View style={[styles.cardMedium, styles.cardLayout]}>

        
        <View style={styles.cardShadowBox} />
        <View style={[styles.group10, styles.groupPosition1]}>
          <Image
            style={[styles.vectorIcon1, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assetsHome/vector1.png")}
          />
          
          <View style={[styles.group11, styles.groupPosition]}>
            <View style={styles.group12}>
              <Text style={[styles.designChanges, styles.myTasks1Clr]}>
                MAD Project 1
              </Text>
            </View>
            <Text style={[styles.daysAgo, styles.daysPosition]}>
              2 Days ago
            </Text>
          </View>
        </View>


        <Image
          style={[styles.cardMediumItem, styles.iconCardLayout]}
          contentFit="cover"
          source={require("../assetsHome/group-40.png")}
        />
      </View>
      <View style={[styles.cardMedium1, styles.cardLayout]}>
        <View style={styles.cardShadowBox} />
        <View style={[styles.group13, styles.groupPosition1]}>
          <Image
            style={[styles.vectorIcon2, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assetsHome/vector2.png")}
          />
          
          <View style={[styles.group14, styles.groupPosition]}>
            <View style={styles.group12}>
              <Text style={[styles.designChanges, styles.myTasks1Clr]}>
                Database Mid-Term
              </Text>
            </View>
            <Text style={[styles.daysAgo1, styles.daysPosition]}>
              2 Days ago
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
      style={styles.ProfileEdit}
      onPress={() => navigation.navigate('ProfileEdit')}>
      <Text >ProfileEdit</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.NotificationsTab}
      onPress={() => navigation.navigate('NotificationsTab')}>
      <Text >Notifications</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.CreateTask}
      onPress={() => navigation.navigate('CreateATask')}>
      <Text >CreateATask</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.TaskCalendar}
      onPress={() => navigation.navigate('TaskCalendar')}>
      <Text >TaskCalendar</Text>
    </TouchableOpacity>

    </View>
  );
};



export default Home;
