import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Timer extends React.Component {
	
	componentDidUpdate() {
		if (this.props.timer.running && this.props.timer.minutes === 0 && this.props.timer.seconds === 0) {
			this.props.submitTime();
		}
	}
	
	render() {
		return (
			<Text style={styles.time}>0{this.props.timer.minutes}:{this.props.timer.seconds < 10 ? '0' + this.props.timer.seconds : this.props.timer.seconds}</Text>
		);
	}
}

const styles = StyleSheet.create({
	time: {
		color: 'red',
		textAlign: 'center',
		fontSize: 20, 
		fontWeight: 'bold'
	}
});