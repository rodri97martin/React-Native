import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class Index extends React.Component {
	render() {
		return (
			<View style={styles.index}>
				<TouchableHighlight style={styles.boton} onPress={() => this.props.navigation.navigate('QuizzesGame')}><Text style={styles.text}>Start Quiz</Text></TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	index: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center'
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