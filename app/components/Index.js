import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import TitleBar from './TitleBar';

export default class Index extends React.Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<View style={{flex: 1, justifyContent: 'flex-end'}}>
					<TitleBar/>
				</View>
				<View style={styles.index}>
					<TouchableHighlight style={styles.boton} onPress={() => this.props.navigation.navigate('QuizzesGame')}><Text style={styles.text}>Start Quiz</Text></TouchableHighlight>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	index: {
		flex: 7,
		justifyContent: 'center',
		alignContent: 'center',
		backgroundColor: 'white'
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