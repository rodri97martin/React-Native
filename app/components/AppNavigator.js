import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import IndexScreen from './Index';
import HelloWorldScreen from './GameScreen';

const AppNavigator = createStackNavigator({ 
	Index: {
		screen: IndexScreen 
	},
	QuizzesGame: {
		screen: HelloWorldScreen
	}},{
	initialRouteName: "Index",
	headerMode: 'none' 
});

export default createAppContainer(AppNavigator);