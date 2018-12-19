import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';


export default class Button extends React.Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(){
		this.props.onClick(this.props.name)
	}

	render() {
		return (
			<TouchableHighlight style={styles.boton} onPress={this.onClick} disabled={this.props.isDisabled}> 
				<Text style={styles.text}>{this.props.name}</Text>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	boton: {
		backgroundColor: 'blue',
		width: '25%',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius:7
	},
	text: {
		textAlign: 'center',
		fontSize: 17,
		color: 'white'
	}
});