import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class Answer extends React.Component {
	constructor(props) {
		super(props);
		this.change = this.change.bind(this);
	}
	
	change(TextInput) {
		this.props.onQuestionAnswer(TextInput);
	}
	render() {
		return (
			<TextInput style={styles.input} placeholder="Type your answer here" type="text" value={this.props.userAnswer || ""} onChangeText={this.change} />
		);
	}
}

const styles = StyleSheet.create ({
	input: {
		fontSize: 17,
		height: 50, 
		borderColor: 'black',
		borderWidth: 1,
		marginLeft: 15,
		marginRight:15, 
		paddingLeft: 5
	}

});