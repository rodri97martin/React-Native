import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class Index extends React.Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<Text style={styles.header}>Quizzes Game</Text>
				<View style={styles.index}>
					<TouchableHighlight style={styles.boton} onPress={() => this.props.navigation.navigate('QuizzesGame')}><Text style={styles.text}>Start Quiz</Text></TouchableHighlight>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	index: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		backgroundColor: 'white'
	}, 
	header: {
		fontSize: 50,
		paddingTop: 35,
		height: 100,
		textAlign: 'center'
	},
	text: {
		textAlign: 'center',
		fontSize: 30
	}, 
	boton: {
		alignSelf: 'center',
		backgroundColor: 'red',
		height: 45,
		width: 200,
		borderWidth: 3
	}
})