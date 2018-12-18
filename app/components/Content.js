import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Pistas from './Pistas';
import Timer from './Timer';
import { View, Image, Text, StyleSheet } from 'react-native';


export default class Content extends React.Component {
	render() {
		return (
			<View>
				<Image style={styles.img} source={{ uri: this.props.question.attachment.url}}/>
				<Timer timer={this.props.timer} submitTime={this.props.submitTime}/>
				<Question question={this.props.question} currentQuestion={this.props.currentQuestion}/>
				<Answer userAnswer={this.props.question.userAnswer || ''} onQuestionAnswer={this.props.onQuestionAnswer}/>
				<Pistas tips={this.props.question.tips}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	img: {
		width: 300,
		height: 200,
		alignSelf: 'center',
		borderColor: 'black',
		borderWidth: 3,
		marginTop: 10, 
		resizeMode: 'stretch'
	}
})