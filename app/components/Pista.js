import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Pistas extends React.Component {
	render() {
		return (
			<Text style={styles.tip}>-{this.props.item}</Text>
		);
	}
}

const styles = StyleSheet.create({
	tip: {
		marginTop:15,
		fontSize: 14,
		paddingLeft: 10
	}
})