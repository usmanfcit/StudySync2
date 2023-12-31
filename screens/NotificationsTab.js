import * as React from "react";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import styles from './Screen_Styles/NotificationScreenStyle';
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';



const NotificationsTab = () => {
  
  const navigation = useNavigation();
  
  return (
    <View style={styles.notificationsTab}>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />

      {/* <TouchableOpacity
      style={styles.notificationsTabChild}
      onPress={() => navigation.navigate('Home')}
    >
      <Text >Home</Text>
    </TouchableOpacity> */}


      <Image
        style={styles.notificationsTabItem}
        contentFit="cover"
        source={require("../assets/rectangle-426.png")}
      />
      
      <Text style={styles.notifications}>Notifications</Text>
      <View style={[styles.cardMedium, styles.cardLayout]}>
        <View style={styles.cardChildShadowBox} />
        <View style={[styles.group, styles.groupPosition1]}>
          <Image
            style={[styles.vectorIcon1, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.toDoList1Traced, styles.list1Position]}
            contentFit="cover"
            source={require("../assets/todolist-1-traced.png")}
          />
          <View style={[styles.group1, styles.groupPosition]}>
            <View style={[styles.group2, styles.groupIconPosition]}>
              <Text
                style={[styles.designChanges, styles.designTypo]}
              >{`[Tomorrow] OOP Quiz 2 `}</Text>
            </View>
            <Text style={[styles.daysAgo, styles.daysTypo]}>30 min ago</Text>
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-40.png")}
        />
      </View>
      <View style={[styles.cardMedium1, styles.cardLayout]}>
        <View style={styles.cardChildShadowBox} />
        <View style={[styles.group3, styles.groupPosition1]}>
          <Image
            style={[styles.vectorIcon2, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.toDoList1Traced1, styles.list1Position]}
            contentFit="cover"
            source={require("../assets/todolist-1-traced.png")}
          />
          <View style={[styles.group4, styles.groupPosition]}>
            <View style={[styles.group2, styles.groupIconPosition]}>
              <Text style={[styles.designChanges, styles.designTypo]}>
                [English] Presentation tomorrow
              </Text>
            </View>
            <Text style={[styles.daysAgo1, styles.daysTypo]}>2 Days ago</Text>
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-40.png")}
        />
      </View>
      <View style={[styles.cardMedium2, styles.cardLayout]}>
        <View style={styles.cardChildShadowBox} />
        <View style={[styles.group6, styles.groupPosition1]}>
          <Image
            style={[styles.vectorIcon3, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.toDoList1Traced2, styles.list1Position]}
            contentFit="cover"
            source={require("../assets/todolist-1-traced.png")}
          />
          <View style={[styles.group7, styles.groupPosition]}>
            <View style={[styles.group2, styles.groupIconPosition]}>
              <Text style={[styles.designChanges, styles.designTypo]}>
                11 pm DSA assignment
              </Text>
            </View>
            <Text style={[styles.daysAgo2, styles.daysTypo]}>1 min ago</Text>
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-40.png")}
        />
      </View>
      <View style={[styles.cardMedium3, styles.cardLayout]}>
        <View style={styles.cardChildShadowBox} />
        <View style={[styles.group9, styles.groupPosition1]}>
          <Image
            style={[styles.vectorIcon4, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.toDoList1Traced3, styles.list1Position]}
            contentFit="cover"
            source={require("../assets/todolist-1-traced.png")}
          />
          <View style={[styles.group10, styles.groupPosition]}>
            <View style={[styles.group11, styles.groupIconPosition]}>
              <Text style={[styles.designChanges3, styles.designTypo]}>
                Project submission today!
              </Text>
            </View>
            <Text style={[styles.daysAgo3, styles.daysTypo]}>1 hour ago</Text>
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-40.png")}
        />
      </View>

      <TouchableOpacity
      onPress={() => navigation.navigate('Home')}
    >
      <Image
        style={styles.arrowShortLeft}
        contentFit="cover"
        source={require("../assets/arrow--short-left.png")}
      />
    </TouchableOpacity>

    </View>
  );


};



export default NotificationsTab;
