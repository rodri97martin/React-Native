import React from 'react';
import gameover from '../assets/gameOver.jpg';
import { View, Image, Text, StyleSheet } from 'react-native';


export default class GameOver extends React.Component {
	render() {
		return (
			<View style={styles.gameOverView}>
				<Image style={styles.gameOver} source={gameover} />
          		<Text style={styles.score}>Score: {this.props.score}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	gameOver: {
		width: 300,
		height: 200,
		alignSelf: 'center',
		borderColor: 'black',
		borderWidth: 3,
		marginTop: 10
	}, 
	score: {
		fontSize: 50,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	gameOverView: {
		marginBottom: 318
	}
});