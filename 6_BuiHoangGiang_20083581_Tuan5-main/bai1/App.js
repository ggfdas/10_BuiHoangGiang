import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, TextInput, Image, Pressable } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
 



const App = () => {
  return (
    <LinearGradient
    colors={["#FBCB00", "#BF9A00"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{ width: "100%", height: "100%" }}
  >
    <View style={{}}>
      <View style={{ marginTop: 100, marginLeft: 0 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Login</Text>
      </View>
      <View
        style={{
          marginTop: 100,
          marginLeft: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "90%",
            height: 40,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <AntDesign name="user" size={24} color="black" style={{marginLeft: 10}}/>
          <TextInput
            placeholder="Name"
            style={{ marginLeft: 20, width: "60%" , fontWeight:'bold' }}
          ></TextInput>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "90%",
            height: 40,
            borderWidth: 1,
            borderColor: "#fff",
            marginTop: 20,
          }}
        >
          <Feather name="lock" size={24} color="black" style={{marginLeft: 10}} />
          <TextInput
            placeholder="Password"
            style={{ marginLeft: 20, width: "60%" , fontWeight:'bold' }}
          ></TextInput>
          <AntDesign name="eye" size={24} color="black" style={{marginRight: 10}}/>
        </View>
      </View>

      <View
        style={{
          marginTop: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable style={{ backgroundColor: "#060000", width: 300,height:45 ,alignItems:'center',justifyContent:'center' }}>
          <Text style={{ textAlign: "center" ,fontSize:20, fontWeight:'bold',color:'#FFFFFF'}}>Login</Text>
        </Pressable>
      </View>
    </View>
    <View style={{ marginTop: 50 }}>
      <Text style={{textAlign:'center',fontSize:26,fontWeight:'bold'}}>Forgot your password?</Text>
    </View>
  </LinearGradient>
);
};

export default App;
