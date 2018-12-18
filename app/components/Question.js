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
		marginTop: 10,
		marginBottom: 10
	}, 
	questionText: {
		fontSize: 30,
		textAlign: 'center'
	}, 
	questionNumber: {
		fontSize: 20,
		textAlign: 'center', 
		fontWeight: 'bold',
		color: 'blue'
	}
})