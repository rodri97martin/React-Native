import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import IndexScreen from './Index';
import GameScreen from './GameScreen';

const AppNavigator = createStackNavigator({ 
	Index: {
		screen: IndexScreen 
	},
	QuizzesGame: {
		screen: GameScreen
	}},{
	initialRouteName: "Index",
	headerMode: 'none' 
});

export default createAppContainer(AppNavigator);