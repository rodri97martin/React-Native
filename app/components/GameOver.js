import React from 'react';
import gameover from '../assets/gameOver.jpg';
import { View, Image, Text } from 'react-native';


export default class GameOver extends React.Component {
	render() {
		return (
			<View id="gameOver">
				<Image class="quizImage" height="300px" source={gameover} />
          		<Text>Score: {this.props.score}</Text>
			</View>

		);
	}
}