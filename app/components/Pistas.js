import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default class Pistas extends React.Component {
	render() {
		return (
			<View style={styles.tips}>
				<Text style={styles.pistas}>Pistas</Text>
				<FlatList data={this.props.tips} renderItem={(tip)=><Text>tip</Text>}>
				</FlatList>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	pistas: {
		textAlign: 'center',
		fontSize: 20, 
		textDecorationLine: 'underline'
	},
	tips: {
		height: 120
	}
})