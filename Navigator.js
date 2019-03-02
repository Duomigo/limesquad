import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
	createStackNavigator,
	createSwitchNavigator,
	createBottomTabNavigator,
	createAppContainer
} from 'react-navigation'

import ExploreScreen from './src/components/Explore/ExploreScreen';

import FeedScreen from './src/components/Feed/FeedScreen';

import ProfileScreen from './src/components/Profile/ProfileScreen';
import ProfileSettings from './src/components/Profile/ProfileSettings'

import SignInScreen from './src/components/Auth/SignInScreen'
import AuthLoadingScreen from './src/components/Auth/AuthLoadingScreen'
import SplashScreen from './src/components/Auth/SplashScreen';

import ShoppersScreen from './src/components/Explore/ShoppersScreen'
import StoreScreen from './src/components/Explore/StoreScreen';
import MapScreen from './src/components/Explore/MapScreen'


// const FeedStack;

const ExploreStack = createStackNavigator({
	Explore: {
		screen: ExploreScreen
	},
	Shopper: {
		screen: ShoppersScreen
	},
	Store: {
		screen: StoreScreen
	},
	Map: {
		screen: MapScreen
	}
})

const ProfileStack = createStackNavigator({
	Profile: {
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
				<Ionicons name="ios-albums" color={tintColor} size={24} />
			)
		}
	},
	Explore: {
		screen: ExploreStack,
		navigationOptions: {
			tabBarLabel: 'Explore',
			tabBarIcon: ({ tintColor }) => (
				<Ionicons name="ios-compass" color={tintColor} size={24} />
			)
		}
	},
	Profile: {
		screen: ProfileStack,  //stack not screen
		navigationOptions: {
			tabBarLabel: 'Profile',
			tabBarIcon: ({ tintColor }) => (
				<Ionicons name="ios-person" color={tintColor} size={24} />
			)
		}
	}
}, {
		swipeEnabled: true
	})

const AuthStack = createStackNavigator({
	SignIn: {
		screen: SignInScreen
	},
	Splash: {
		screen: SplashScreen
	}
}, {
	initialRouteName: 'Splash'
});

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


