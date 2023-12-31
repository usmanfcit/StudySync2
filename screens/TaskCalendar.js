import * as React from "react";
import { Image } from "expo-image";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from './Screen_Styles/TaskCalendarStyle';
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const TaskCalender = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.taskCalender}>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assetsTC/group.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assetsTC/group1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assetsTC/vector.png")}
      />

      {/* <TouchableOpacity
      style={styles.notificationsTabChild}
      onPress={() => navigation.navigate('Home')}
    >
      <Text >Home</Text>
    </TouchableOpacity> */}

      <View style={[styles.taskCalenderItem, styles.groupChildShadowBox]} />
      
      <Text style={[styles.text7, styles.text7Typo]}>Oct, 2023</Text>
      <View style={styles.group1}>
        <View style={styles.groupPosition3}>
          <View style={styles.groupPosition3}>
            <LinearGradient
              style={[styles.groupChild, styles.groupPosition3]}
              locations={[0, 1]}
              colors={["#9c2cf3", "#3a49f9"]}
            />
            <Text style={styles.addTask}>Add Task</Text>
            <Image
              style={styles.addIcon}
              contentFit="cover"
              source={require("../assetsTC/add.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.tasks, styles.text7Typo]}>Tasks</Text>
      <View style={[styles.cardMedium, styles.cardLayout]}>
        <View style={styles.cardChildShadowBox} />
        <View style={[styles.group2, styles.groupPosition2]}>
          <Image
            style={[styles.vectorIcon2, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assetsTC/vector2.png")}
          />
          <Image
            style={[styles.toDoList1Traced, styles.list1Position]}
            contentFit="cover"
            source={require("../assetsTC/todolist-1-traced.png")}
          />
          <View style={[styles.group3, styles.groupPosition1]}>
            <View style={[styles.group4, styles.groupPosition]}>
              <Text style={[styles.designChanges, styles.text7Typo]}>
                Applied Physics Quiz 4
              </Text>
            </View>
            <Text style={[styles.daysAgo, styles.daysTypo]}>2 Days ago</Text>
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assetsTC/group-40.png")}
        />
      </View>
      <View style={[styles.cardMedium1, styles.cardLayout]}>
        <View style={styles.cardChildShadowBox} />
        <View style={[styles.group5, styles.groupPosition2]}>
          <Image
            style={[styles.vectorIcon3, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assetsTC/vector3.png")}
          />
          <Image
            style={[styles.toDoList1Traced1, styles.list1Position]}
            contentFit="cover"
            source={require("../assetsTC/todolist-1-traced1.png")}
          />
          <View style={[styles.group6, styles.groupPosition1]}>
            <View style={[styles.group4, styles.groupPosition]}>
              <Text style={[styles.designChanges, styles.text7Typo]}>
                English Exam
              </Text>
            </View>
            <Text style={[styles.daysAgo1, styles.daysTypo]}>2 Days ago</Text>
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assetsTC/group-401.png")}
        />
      </View>
      <View style={[styles.cardMedium2, styles.cardLayout]}>
        <View style={styles.cardChildShadowBox} />
        <View style={[styles.group8, styles.groupPosition2]}>
          <Image
            style={[styles.vectorIcon4, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assetsTC/vector4.png")}
          />
          <Image
            style={[styles.toDoList1Traced2, styles.list1Position]}
            contentFit="cover"
            source={require("../assetsTC/todolist-1-traced2.png")}
          />
          <View style={[styles.group9, styles.groupPosition1]}>
            <View style={[styles.group4, styles.groupPosition]}>
              <Text style={[styles.designChanges, styles.text7Typo]}>
                PF Final Exam
              </Text>
            </View>
            <Text style={[styles.daysAgo2, styles.daysTypo]}>2 Days ago</Text>
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assetsTC/group-402.png")}
        />
      </View>
      <View style={[styles.cardMedium3, styles.cardLayout]}>
        <View style={styles.cardChildShadowBox} />
        <View style={[styles.group11, styles.groupPosition2]}>
          <Image
            style={[styles.vectorIcon5, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assetsTC/vector5.png")}
          />
          <Image
            style={[styles.toDoList1Traced3, styles.list1Position]}
            contentFit="cover"
            source={require("../assetsTC/todolist-1-traced3.png")}
          />
          <View style={[styles.group12, styles.groupPosition1]}>
            <View style={[styles.group13, styles.groupPosition]}>
              <Text style={[styles.designChanges, styles.text7Typo]}>
                AI Quiz 2
              </Text>
            </View>
            <Text style={[styles.daysAgo3, styles.daysTypo]}>2 Days ago</Text>
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assetsTC/group-403.png")}
        />
      </View>

      <TouchableOpacity
      onPress={() => navigation.navigate('Home')}
    >
      <Image
        style={styles.arrowShortLeft}
        contentFit="cover"
        source={require("../assetsTC/arrow--short-left.png")}
      />
    </TouchableOpacity>

    </View>
  );
};



export default TaskCalender;
