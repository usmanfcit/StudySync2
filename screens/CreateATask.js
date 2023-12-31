import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from './Screen_Styles/CreateTaskStyle';
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 

const CreateATask = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.createATask}>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assetsCT/group.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assetsCT/group1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assetsCT/vector.png")}
      />
      
      <Image
        style={styles.createATaskItem}
        contentFit="cover"
        source={require("../assetsCT/rectangle-427.png")}
      />
      <View style={[styles.group, styles.groupLayout2]}>
        <View style={[styles.groupInner, styles.groupPosition3]}>
          <View style={[styles.groupInner, styles.groupPosition3]}>
            <LinearGradient
              style={[styles.groupChild, styles.groupChildShadowBox1]}
              locations={[0, 1]}
              colors={["#9c2cf3", "#3a49f9"]}
            />
            <Text style={[styles.createTask, styles.createTypo]}>
              Create Task
            </Text>
          </View>
        </View>
      </View>
      
      <TouchableOpacity
      onPress={() => navigation.navigate('Home')}
    >
      <Image
        style={styles.arrowShortLeft}
        contentFit="cover"
        source={require("../assetsCT/arrow--short-left.png")}
      />
    </TouchableOpacity>

      <View style={styles.group1}>
        <Text style={[styles.createATask1, styles.createTypo]}>
          Create a Task
        </Text>
      </View>
      <View style={styles.nameParent}>
        <Text style={[styles.name, styles.nameTypo]}>Name</Text>
        <Text style={[styles.startTime, styles.timeTypo]}>Start Time</Text>
        <Text style={[styles.endTime, styles.timeTypo]}>End Time</Text>
        <Text style={[styles.date, styles.nameTypo]}>Date</Text>
        <Text style={[styles.description, styles.timeTypo]}>Description</Text>
        <Text style={[styles.category, styles.timeTypo]}>Category</Text>
        <Text style={[styles.operatingSystemsProject, styles.oct242023Typo]}>
          Operating Systems Project
        </Text>
        <Text style={[styles.pm, styles.pmTypo]}>12:45 pm</Text>
        <Text style={[styles.pm1, styles.pmTypo]}>03:35 pm</Text>
        <Text style={[styles.oct242023, styles.oct242023Typo]}>
          Oct 24, 2023
        </Text>
        <Text style={[styles.loremIpsumDolor, styles.createTypo1]}>
          abc
        </Text>
          
      </View>
      <View style={[styles.group2, styles.groupLayout]}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.groupLayout]}
            locations={[0, 1]}
            colors={["#9c2cf3", "#3a49f9"]}
          />
          <Text style={[styles.quiz, styles.quizPosition]}>Quiz</Text>
        </View>
      </View>
      <View style={[styles.group3, styles.groupLayout]}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.courseProject, styles.quizPosition]}>
            Course Project
          </Text>
        </View>
      </View>
      <View style={[styles.group4, styles.groupPosition1]}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.presentation, styles.quizPosition]}>
            Presentation
          </Text>
        </View>
      </View>
      <View style={[styles.group5, styles.groupPosition1]}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.classActivity, styles.quizPosition]}>
            Class Activity
          </Text>
        </View>
      </View>
      <View style={[styles.group6, styles.groupPosition]}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.assignment, styles.quizPosition]}>
            Assignment
          </Text>
        </View>
      </View>
      <View style={[styles.group7, styles.groupPosition]}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.others, styles.quizPosition]}>Others</Text>
        </View>
      </View>
    </View>
  );
};



export default CreateATask;
