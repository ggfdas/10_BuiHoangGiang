import { StatusBar } from "expo-status-bar";
import { CheckBox, StyleSheet, View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <LinearGradient
      style={styles.container}
      colors={["#3B3B98", "#C4C4C4"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.view1}>
        <Text style={styles.text1}>PASSWORD GENERATOR</Text>
        <TextInput style={styles.textinput}></TextInput>
        <View style={styles.view2}>
          <Text style={styles.text2}>Password length</Text>
          <TextInput style={styles.textinput1}></TextInput>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text3}>Include lower case letters</Text>
          <CheckBox style={styles.checkbox1}></CheckBox>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text4}>Include upcase letters</Text>
          <CheckBox style={styles.checkbox2}></CheckBox>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text5}>Include number</Text>
          <CheckBox style={styles.checkbox3}></CheckBox>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text6}>Include special symbol</Text>
          <CheckBox style={styles.checkbox4}></CheckBox>
        </View>
        <button style={styles.button}>GENERATE PASSWORD</button>
      </View>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 360,
    height: 640,
  },
  view1: {
    backgroundColor: "#23235B",
    width: 350,
    height: 605,
    borderRadius: 15,
    margin: 19,
  },
  text1: {
    width: 240,
    height: 64,
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: 700,
    textAlign: "center",
    marginTop: 30,
    marginLeft: 60,
    lineHeight: "29,3px",
  },
  textinput: {
    backgroundColor: "#151537",
    width: 320,
    height: 55,
    marginTop: 50,
    marginLeft: 15,
  },
  view2: {
    display:"flex",
    flexDirection: "row",
    margin: "10px",
  },
  text2: { 
    marginTop:20,
    marginLeft:5,
    fontSize: 20,
    lineHeight: "23,44px",
    color: "#FFFFFF",
  },
  text3: {
    marginLeft:5, 
    fontSize: 20,
    lineHeight: "23,44px",
    color: "#FFFFFF",
  },
  text4: { 
    marginLeft:5,
    fontSize: 20,
    lineHeight: "23,44px",
    color: "#FFFFFF",
  },
  text5: { 
    marginLeft:5,
    fontSize: 20,
    lineHeight: "23,44px",
    color: "#FFFFFF",
  },
  text6: {
    marginLeft:5, 
    fontSize: 20,
    lineHeight: "23,44px",
    color: "#FFFFFF",
  },
  textinput1: {
    marginTop:20,
    marginLeft:30,
    backgroundColor: "#FFFFFF",
    width: 145,
    height: 33,
  },
  checkbox1: {
    width: 30,
    height:30,
    marginLeft:67,
  },
  checkbox2: {
    width: 30,
    height:30,
    marginLeft:98,
  },
  checkbox3: {
    width: 30,
    height:30,
    marginLeft:150,
  },
  checkbox4: {
    width: 30,
    height:30,
    marginLeft: 90,
  },
  button:{
    backgroundColor:"#3B3B98" , 
    width:310 , 
    height:55, 
    color:'#FFFFFF', 
    borderColor:"#3B3B98" , 
    margin:'20px',
    fontWeight:700,
    fontSize:20,
  }
});
