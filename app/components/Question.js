import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Question extends React.Component {
	render() {
		return (
			<View style={styles.question}>

				<Text style={styles.questionNumber}>Question {this.props.currentQuestion + 1}/10 </Text>
				<Text style={styles.questionText}>{this.props.question.question} </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	question: {
		marginTop: 4,
		marginBottom: 10
	}, 
	questionText: {
		fontSize: 24,
		textAlign: 'center',
		height: 120
	}, 
	questionNumber: {
		fontSize: 20,
		textAlign: 'center', 
		fontWeight: 'bold',
		color: 'blue'
	}
})