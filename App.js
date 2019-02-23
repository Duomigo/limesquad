import React from 'react';
import { 
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { 
  createStackNavigator,
  createSwitchNavigator, 
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'

import ExploreScreen from './components/Explore/ExploreScreen';

import FeedScreen from './components/Feed/FeedScreen';

import ProfileScreen from './components/Profile/ProfileScreen';
import ProfileSettings from './components/Profile/ProfileSettings'

import SignInScreen from './components/Auth/SignInScreen'
import AuthLoadingScreen from './components/Auth/AuthLoadingScreen'


// const FeedStack;

// const ExploreStack;

const ProfileStack = createStackNavigator({
  Classes: {
    screen: ProfileScreen
  },
  Settings: {
    screen: ProfileSettings
  }
})

const AppStack = createBottomTabNavigator({
  Feed: {
    screen: FeedScreen,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-albums" color={tintColor} size={24}/>
      )
    }
  },
  Explore: {
    screen: ExploreScreen,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-compass" color={tintColor} size={24}/>
      )
    }
  },
  Profile: {
    screen: ProfileStack,  //stack not screen
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-person" color={tintColor} size={24}/>
      )
    }
  }
}, {
  swipeEnabled: true
})

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
	{
	  AuthLoading: AuthLoadingScreen,
	  App: AppStack,
	  Auth: AuthStack,
	},
	{
	  initialRouteName: 'AuthLoading',
	}
  ));
  

