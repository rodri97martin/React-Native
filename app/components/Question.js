import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default class Question extends React.Component {
	render() {
		return (
			<View style={styles.question}>

				<Text style={styles.questionNumber}>Question {this.props.currentQuestion + 1}/10 </Text>
				<ScrollView>
					<Text style={styles.questionText}>{this.props.question.question} </Text>
				</ScrollView>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	question: {
		flex: 1
	}, 
	questionText: {
		fontSize: 24,
		textAlign: 'center'
	},
	questionNumber: {
		fontSize: 20,
		textAlign: 'center', 
		fontWeight: 'bold',
		color: 'blue'
	}
})