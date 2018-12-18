import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default class TitleBar extends React.Component {
	render() {
		return (
			<Text style={styles.title}>Quizzes Game</Text>
		);
	}
}

const styles = StyleSheet.create ({
	title: {
		fontSize: 50,
		paddingTop: 40,
		height: 100,
		textAlign: 'center'
	}

});