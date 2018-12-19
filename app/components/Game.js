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
				<View style={{ flex: 1}}>
					<View style={{ flex: 17}}>
						<GameOver score={this.props.score}/>
					</View>
					<View style={{ flex: 4}}>
						<Actionbar onClick={this.onClick} currentQuestion={this.props.currentQuestion} isFinished={this.props.isFinished}/>
					</View>
					
          			
        		</View>
        	);
		} else {
			return (
				<View style={{ flex: 1}}>
					<View style={{ flex: 17}}>
						<Content question={this.props.question} 
							onQuestionAnswer={this.props.onQuestionAnswer} 
							timer={this.props.timer}
							submitTime={this.props.submitTime}
							currentQuestion={this.props.currentQuestion}
						/>
					</View>
					<View style={{ flex: 2}}>
						<Actionbar onClick={this.onClick} currentQuestion={this.props.currentQuestion} isFinished={this.props.isFinished}/>
					</View>
					<View style={{ flex: 2}}>
						<ActionbarX onClick={this.onClick} navigate={this.props.navigate}/>
					</View>
				</View>
			);
		}
	}
}
