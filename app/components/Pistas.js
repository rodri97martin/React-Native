import React from 'react';
import Pista from './Pista';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default class Pistas extends React.Component {
	render() {
		return (
			<View style={styles.tips}>
				<Text style={styles.pistas}>Pistas</Text>
				<FlatList data={this.props.tips} renderItem={({item, index})=>(<Pista item={item}/>)} keyExtractor={(item, index) => index.toString()}/>
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
	tip: {
		marginTop:15,
		fontSize: 14,
		paddingLeft: 10
	}
})