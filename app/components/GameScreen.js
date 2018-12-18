import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import TitleBar from './TitleBar';
import { questionAnswer } from '../redux/actions';
import { changeQuestion } from '../redux/actions';
import { submit } from '../redux/actions';
import { initQuestions } from '../redux/actions';
import { startTimer } from '../redux/actions';
import { stopTimer } from '../redux/actions';
import { changeTime } from '../redux/actions';

import { View } from 'react-native';


var timer = null;

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.download = this.download.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.submitTime = this.submitTime.bind(this);
  }

  download() {
    fetch('https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=a56673ed15ebc70ba6f2')
      .then(res => res.json())
      .then((questions) => {
        this.props.dispatch(initQuestions(questions));
      })
      .catch(err => console.error(err));
  }

  startTimer() {
    this.props.dispatch(startTimer());
    timer = setInterval(()=>{
      this.props.dispatch(changeTime())
    }, 1000);
  }

  stopTimer() {
    this.props.dispatch(stopTimer());
    clearInterval(timer);
  }

  componentDidMount() {
    this.download();
    this.startTimer();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'silver'}}>
        <TitleBar/>
        <Game question={this.props.questions[this.props.currentQuestion]} 
          onQuestionAnswer={(answer)=>{ this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))}}
          onClick={this.onClick}
          currentQuestion={this.props.currentQuestion}
          isFinished={this.props.finished}
          score={this.props.score}
          timer={this.props.timer}
          submitTime={this.submitTime}
        />
      </View>
    );
  }
  
  submitTime() {
    this.onClick("Submit");
  }

  onClick(name) {
    if (name === "Submit") {
      this.props.dispatch(submit(this.props.questions));
      this.stopTimer();
    } else if (name === "Play Again"){
      this.download();
      this.stopTimer();
      this.startTimer();
    } else {
      this.props.dispatch(changeQuestion(name));
    }
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(GameScreen);
