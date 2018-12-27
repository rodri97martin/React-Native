import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Pistas from './Pistas';
import Timer from './Timer';
import { View, Image, Text, StyleSheet } from 'react-native';


export default class Content extends React.Component {
	render() {
		return (
			<View style={{ flex: 1}}>
				<View style={{ flex: 46}}>
					<Image style={styles.img} source={{ uri: this.props.question.attachment.url}}/>
				</View>
				<View style={{ flex: 6}}>
					<Timer timer={this.props.timer} submitTime={this.props.submitTime}/>
				</View>
				<View style={{ flex: 22}}>
					<Question question={this.props.question} currentQuestion={this.props.currentQuestion}/>
				</View>
				<View style={{ flex: 16}}>
					<Answer userAnswer={this.props.question.userAnswer || ''} onQuestionAnswer={this.props.onQuestionAnswer}/>
				</View>
				<View style={{ flex: 40}}>
					<Pistas tips={this.props.question.tips}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	img: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'black',
		borderWidth: 3, 
		resizeMode: 'stretch',
		marginLeft: 30,
		marginRight: 30
	}
})