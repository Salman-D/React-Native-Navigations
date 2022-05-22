import IonicIcon from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../Settings'
import Profile from '../Profile'
import Home from '../Home'

const Tab = createBottomTabNavigator();


const BottomNavigations = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home"
        options={{
          headerShown: false,
          tabBarIcon: () => <BottomIcons name='home' />
        }}
        component={Home} />

      <Tab.Screen name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: () => <BottomIcons name='person' />
        }}
        component={Profile} />

      <Tab.Screen name="Settings"
        options={{
          headerShown: false,
          tabBarIcon: () => <BottomIcons name='settings' />
        }}
        component={Settings} />
    </Tab.Navigator>
  );
}

const BottomIcons = props => {
  return (
    <IonicIcon name={props.name} size={20} />
  )
}

export default BottomNavigations