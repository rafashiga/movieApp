import React from 'react';
import 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import List from '../pages/List';
import Detail from '../pages/Detail';
import SearchPage from '../pages/Search';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator
    tabBarOptions={{
      keyboardHidesTabBar: true,
      activeTintColor: 'rgb(103, 58, 183)',
      inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
      style: {
        backgroundColor: '#fff',
      },
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <Icon name="home" size={20} color="rgb(103, 58, 183)" />
        ),
      }}
    />
  </Tab.Navigator>
);

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: 'transparent',
          backgroundColor: '#fff',
          elevation: 0,
        },
      }}>
      {/* <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{
          title: 'movieApp',
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      /> */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'movieApp',
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
