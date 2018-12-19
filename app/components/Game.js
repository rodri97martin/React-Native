import React from 'react';
import Content from './Content';
import Actionbar from './Actionbar';
import ActionbarX from './ActionbarX';
import GameOver from './GameOver';
import { View } from 'react-native';



export default class Game extends React.Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(name){
		this.props.onClick(name)
	}

	render() {

		if (this.props.isFinished === true) {
			return (
				<View>
					<GameOver score={this.props.score}/>
          			<Actionbar onClick={this.onClick} currentQuestion={this.props.currentQuestion} isFinished={this.props.isFinished}/>
        		</View>
        	);
		} else {
			return (
				<View>
					<Content question={this.props.question} 
						onQuestionAnswer={this.props.onQuestionAnswer} 
						timer={this.props.timer}
						submitTime={this.props.submitTime}
						currentQuestion={this.props.currentQuestion}
					/>
					<Actionbar onClick={this.onClick} currentQuestion={this.props.currentQuestion} isFinished={this.props.isFinished}/>
					<ActionbarX onClick={this.onClick} navigate={this.props.navigate}/> 
				</View>
			);
		}
	}
}
