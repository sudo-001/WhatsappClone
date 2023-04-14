import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import New from '../screens/New';
import Capture from '../screens/Capture';
import User from '../screens/User';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTab } from './MyTab';
import { View, Text } from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();
export default function MainRoot() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        tabBar={props => <MyTab {...props} />}
      >
        <Tab.Screen 
          name="Home" component={Home}
          options={{
            // header: ({ navigation, route, options }) => {
            //   const title = getHeaderTitle(options, route.name);
            
            //   return (
            //   <View className="h-20 bg-[#f00]">
            //     <Text>{title}</Text>
            //   </View>)
            // },
            headerStyle: {
              backgroundColor: "rgba(0,0,0,1)",
          },
            title: (
              <View className="flex-row items-center">
                <Ionicons name="chatbubble-ellipses-sharp" size={30} color="#0f0" />
                <Text className="text-[#fff] font-bold text-xl ml-4">SudoChat</Text>
              </View>
              ),
            // headerLeft: () => {
            //   <Entypo name="chat" size={24} color="black" />
            // },
            tabBarLabel: "home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
        name="Contact" component={Contact}
        options={{
          tabBarLabel: "phone",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="New" component={New}
        options={{
          tabBarLabel: "plus",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="Capture" component={Capture}
        options={{
          tabBarLabel: "camera",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={30} className="font-bold" />
          ),
        }} />
        <Tab.Screen name="User" component={User}
        options={{
          tabBarLabel: "account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
